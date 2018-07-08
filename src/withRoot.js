import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';
import { Grid, colors } from '@material-ui/core';
import AutoIntlProvider from './components/AutoIntlProvider';
import Progress from './components/Progress';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);

      this.pageContext = this.props.pageContext || getPageContext();
      this.state = {
        locale: 'en'
      };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
      if (navigator) {
        this.setState({
          locale: navigator.language.split(/[-_]/)[0]
        });
      }
    }

    pageContext = null;

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <AutoIntlProvider locale={this.state.locale}>
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Progress />
            <Grid
              style={{
                background: `radial-gradient(${colors.lightBlue[50]}, ${
                  colors.lightBlue[300]
                })`,
                minHeight: '100vh'
              }}
              container
              justify="center"
              alignItems="center"
            >
              <Component {...this.props} />
            </Grid>
          </MuiThemeProvider>
        </AutoIntlProvider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object
  };

  WithRoot.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

export default withRoot;
