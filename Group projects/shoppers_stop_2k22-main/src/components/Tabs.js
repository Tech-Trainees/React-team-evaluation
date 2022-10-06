import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs,Tab,TextField,Box,Typography,InputAdornment } from '@mui/material';
import  Search  from '@mui/icons-material/SearchTwoTone'
import '../assets/styles/tabpanel.css'
import Beautypic from '../assets/images/image 65.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <span><img src={Beautypic} alt='beauty logo' className='beautylogo' /></span>
            <div className="mainsearch">
                <div className="searchbar">
                    <TextField
                    placeholder='Tell us what are you looking for'
                    id="outlined-basic"
                    // variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                      }}
                    // label="Search"
                    />
                </div>
            </div>
          <Tab label="Shop" {...a11yProps(0)} />
          <Tab label="Luxe" {...a11yProps(1)} />
          <Tab label="Brands" {...a11yProps(2)} />
          <Tab label="Beauty Advice" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
                      
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      
      </TabPanel>
      <TabPanel value={value} index={3}>
                 
      </TabPanel>
    </Box>
  );
}
