import * as React from 'react';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

// Styles definition
const stackStyles: IStackStyles = {
root: {
    background: DefaultPalette.themeTertiary,
},
};
const stackItemStyles: IStackItemStyles = {
root: {
    alignItems: 'center',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
},
};

// Tokens definition
const outerStackTokens: IStackTokens = { childrenGap: 5 };
const innerStackTokens: IStackTokens = {
childrenGap: 5,
padding: 10,
};

const SSOLogin: React.FunctionComponent = () => {
    return (
        <Stack.Item grow={1} styles={stackItemStyles}>
            <Stack tokens={outerStackTokens} >
                <Stack styles={stackStyles} tokens={innerStackTokens} style={{position:"absolute", top: 200, left: 550, width: 400}}>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <PrimaryButton text="Google アカウントでサインイン"/>
                    </Stack.Item>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <PrimaryButton text="Twitter アカウントでサインイン"/>
                    </Stack.Item>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <PrimaryButton text="Yahoo! アカウントでサインイン"/>
                    </Stack.Item>
                </Stack>
            </Stack>
        </Stack.Item>
    );
}

export default SSOLogin