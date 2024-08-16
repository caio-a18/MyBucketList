import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  ul: {
    justifyContent: 'space-around',
    '& .MuiPaginationItem-root': {
      color: '#4f005b',  // Custom text color
      borderColor: '#4f005b',  // Custom border color for outlined variant
    },
    '& .Mui-selected': {
      backgroundColor: '#4f005b',  // Custom background color for selected item
      color: '#ffffff',  // Text color for selected item
    },
    '& .MuiPaginationItem-outlined': {
      '&.Mui-selected': {
        backgroundColor: '#4f005b',  // Background color for selected outlined item
        borderColor: '#4f005b',  // Border color for selected outlined item
        color: '#ffffff',  // Text color for selected outlined item
      },
    },
  },
}));