import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

interface IDummydata {
  Scaling: string[];
  DeFi: string[];
  Bridges: string[];
}

export default function MainDashboard() {
  const dummyData: IDummydata = {
    Scaling: ['OP Mainnet', 'Arbitrum', 'Base', 'Blast', 'Mantle', 'Scroll'],
    DeFi: ['Compound', 'Curve', 'Lido', 'AAVE', 'EigenLayer', 'ether.fi'],
    Bridges: [
      'LayerZero v2 OFTs',
      'Ronin V3',
      'Portal (Wormhole)',
      'Multichain',
      'Stargate',
      'Connext',
    ],
  };

  const renderCategory = (category: string, items: string[]) => (
    <Paper
      sx={{
        width: '95%',
        height: '350px',
        mt: 2,
        ml: 2,
        borderRadius: '16px',
      }}
      elevation={3}
    >
      <Box sx={{ width: '100%', height: '50px' }}>
        <Typography variant="h4" sx={{ pt: 2, pl: 2 }}>
          {category}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {items.map(item => (
          <Box
            key={item}
            sx={{
              width: '225px',
              height: '225px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ml: 2,
              mt: 2,
              border: '1px solid gray',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {Object.entries(dummyData).map(([category, items]) =>
        renderCategory(category, items)
      )}
    </Box>
  );
}
