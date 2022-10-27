import * as React from 'react';
import { DefaultPalette, Stack, IStackStyles, IStackTokens } from '@fluentui/react';
import OriginLogin from '../components/OriginLogin';
import SSOLogin from '../components/SSOLogin';

// Styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
  },
};

// Tokens definition
const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const LoginSSO: React.FunctionComponent = () => {
    return(
        <>
        <h1 style={{textAlign: "center"}}>会員ページにサインイン</h1>
        <Stack horizontal styles={stackStyles} tokens={stackTokens}>
            <SSOLogin />
            <OriginLogin />
        </Stack>
        </>
    );
};

export default LoginSSO