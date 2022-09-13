import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  redirectLinkSuccess: {
    ...theme.typography['body-lg'],
    color: theme.palette.primary.main,
    background: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '16px',
    justifyContent: 'flex-start',
    '& .MuiSvgIcon-root': {
      color: '#F79EC8',
      marginLeft: '4px',
    },
  },
});
