import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNetwork } from 'wagmi';
import { useState,useEffect } from 'react';
import { getCollectionService } from '../../utils/getCollectionService';
const NFTCollectionInfo = () =>{
    const {activeChain} = useNetwork();
    const [mints,setMints] = useState([]);
    //const [infos,setInfos]  = useState([]);
    useEffect(()=>{
        const getCollection = async() => {
        const mints = await getCollectionService(activeChain?.id);
        setMints(mints);
        //setInfos(infos);
        }
        getCollection();
    },[activeChain,mints])
    return(
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow key={1}>
                        <TableCell>Address</TableCell>
                        <TableCell >CollectionName</TableCell>
                        <TableCell >TokenID</TableCell>
                    </TableRow>
                </TableHead>
                {mints && (<TableBody>
                {(mints.map((data) => (
                    <TableRow
                    key={data.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {data.to}
                        </TableCell>
                        <TableCell >{data.tokenName}</TableCell>
                        <TableCell >{data.tokenId}</TableCell>
                    </TableRow>
                )))}
                </TableBody>)}
            </Table>
        </TableContainer>
        </>
    )

}

export default NFTCollectionInfo;