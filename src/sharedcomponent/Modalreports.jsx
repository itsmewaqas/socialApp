import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import returnFalse from 'react-custom-scrollbars/lib/utils/returnFalse';

function Modalreports({ reportModalData, reportModalClose }) {

    const [reportStep1, SetreportStep1] = useState(true);
    const [reportStep2, SetreportStep2] = useState(false);
    const [reportStep3, SetreportStep3] = useState(false);

    const postId = reportModalData;

    useEffect(() => {
    }, []);

    const rStep1 = () => {
        SetreportStep1(false);
        SetreportStep2(true);
    }

    const rStep2 = () => {
        SetreportStep1(false);
        SetreportStep2(false);
        SetreportStep3(true);
    }

    const rStepBack1 = () => {
        SetreportStep1(true);
        SetreportStep2(false);
    }

    const rStepBack2 = () => {
        SetreportStep2(true);
        SetreportStep3(false);
    }

    return (
        <div>
            <Dialog
                open={true}
                fullWidth={true}
                onClose={() => reportModalClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>

                    {reportStep1 ?
                        <div className='reportModalContent'>
                            <a onClick={() => reportModalClose()} className='reportClose'><CloseIcon fontSize='small' /></a>
                            <h2>Report</h2>
                            <h3>Please Select a Problam
                                <span>if someone is in immediate danger, get help before reporting to Sanutanu Don't wait.</span></h3>
                            <ul>
                                <li><a onClick={() => rStep1()}>Nudity <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Violence <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Harassment <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Suicide or self-injury <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>False information <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Spam <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Unauthorised sales <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Hate speech <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Terrorism <ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep1()}>Somthing else <ArrowForwardIosIcon fontSize='small' /></a></li>
                            </ul>
                        </div> : null}

                    {reportStep2 ?
                        <div className='reportModalContent'>

                            <a onClick={() => rStepBack1()} className='reportback'><ArrowBackIosNewIcon fontSize='small' /></a>
                            <a onClick={() => reportModalClose()} className='reportClose'><CloseIcon fontSize='small' /></a>
                            <h2>Report</h2>
                            <h3>What Kind of nudity?
                                <span>Please select yhe most relevant option.</span></h3>
                            <ul>
                                <li><a onClick={() => rStep2()}>Adult nudity<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Sexually suggestive<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Sexual activity<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Sexual exploition<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Sexual services<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Involves child<ArrowForwardIosIcon fontSize='small' /></a></li>
                                <li><a onClick={() => rStep2()}>Sharing private images<ArrowForwardIosIcon fontSize='small' /></a></li>
                            </ul>
                        </div> : null}

                    {reportStep3 ?
                        <div className='reportModalContent'>
                            <a onClick={() => rStepBack2()} className='reportback'><ArrowBackIosNewIcon fontSize='small' /></a>
                            <a onClick={() => reportModalClose()} className='reportClose'><CloseIcon fontSize='small' /></a>
                            <h2>Community Standards</h2>
                            <h3>Nudity
                                <span>We only remove content that goes againts our Community Standards. We don't allow things such as:</span></h3>
                            <ul>
                                <li><a>Sexual activity</a></li>
                                <li><a>Offering or requesting sexual activity</a></li>
                                <li><a>Female nipples (except breastfeeding, health and acts of protest)</a></li>
                                <li><a>Nudity showing genitals</a></li>
                                <li><a>Sexually explicit language</a></li>
                            </ul>
                            <p><strong>Receive notifications about this report.
                                <input style={{float:'right'}} type="checkbox" /> </strong></p>
                            <Button style={{ marginTop: 15 }} size="small" fullWidth={true} variant="contained" color="primary">Submit</Button>
                        </div> : null}

                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modalreports;


