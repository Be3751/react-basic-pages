import * as React from 'react';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';

// Styles definition
const stackStyles: IStackStyles = {
root: {
    background: DefaultPalette.white,
},
};
const stackItemStyles: IStackItemStyles = {
    root: {
        alignItems: 'center',
        background: DefaultPalette.white,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
};
const buttonStyles: IButtonStyles = {
    root: {
        width: 300,
        height: 50,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: '#E63B42',
    }
}

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
                        <PrimaryButton text="Google アカウントでサインイン" styles={buttonStyles}/>
                    </Stack.Item>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <PrimaryButton text="Twitter アカウントでサインイン" styles={buttonStyles} style={{backgroundColor: "#0FB3F5"}}/>
                    </Stack.Item>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <PrimaryButton text="Yahoo! アカウントでサインイン" styles={buttonStyles} style={{backgroundColor: "#94A1FF"}}/>
                    </Stack.Item>
                </Stack>
            </Stack>
        </Stack.Item>
    );
}

export default SSOLogin