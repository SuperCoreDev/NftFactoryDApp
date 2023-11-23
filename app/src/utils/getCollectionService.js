// import {createClient} from 'urql';
import { ApolloClient,InMemoryCache, gql } from "@apollo/client";


export const getCollectionService = (chainId) =>{
    // const client = createClient({url:'https://api.thegraph.com/subgraphs/name/hetape/goerlifactorysub',});
    const suburl = '';
    if(chainId === 5) suburl = 'https://api.thegraph.com/subgraphs/name/hetape/goerlinftfactorysub';
    else if(chainId === 80001) suburl = 'https://api.thegraph.com/subgraphs/name/hetape/mumbainftfactorysub';
    const client = new ApolloClient({
        uri:suburl,
        cache: new InMemoryCache()
    })

    // const query = `query {
    //     getCollectionInfos {
    //         id
    //         _new
    //         _name
    //         _uid
    //     }
    // }`;
    return client.query({query: gql`
        query CollectionInfos {
            getCollectionInfos {
                id
                _new
                _name
                _uid
            }
            mints {
                id
                to
                tokenName
                tokenId
                blockNumber
            }
        }
    `}).then((result) => {
        if(result) return result.data.mints;
        //if(result) return {mints:result.data.mints,infos:result.data.getCollectionInfos}
        
    })
    // const {data, error} = await client.query(query, []).toPromise();
    // return data; 
}
/*
for example
const tokensQuery = `query ($account: String!) {
    user(id: $account) {
      tokens(first: 500) {
        tokenID
        name
        staked
        stakeLocation
        commonSense
      }
     }
    }`;

in this case account param should be given for this query

const { data, error } = await client
      .query(tokensQuery, { account: address.toLowerCase() })
      .toPromise();

*/