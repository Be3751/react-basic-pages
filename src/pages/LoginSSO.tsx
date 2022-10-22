import * as React from 'react';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Link } from '@fluentui/react';

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
const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};
const outerStackTokens: IStackTokens = { childrenGap: 5 };
const innerStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const LoginSSO: React.FunctionComponent = () => {
    return(
        <>
        <h1 style={{textAlign: "center"}}>会員ページにサインイン</h1>
        <Stack horizontal styles={stackStyles} tokens={stackTokens}>
            <Stack.Item grow={1} styles={stackItemStyles}>
                <Stack tokens={outerStackTokens} >
                    <Stack styles={stackStyles} tokens={innerStackTokens} style={{position:"absolute", top: 200, left: 550, width: 400}}>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <PrimaryButton text="Googleアカウントでサインイン"/>
                        </Stack.Item>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <PrimaryButton text="Twitterアカウントでサインイン"/>
                        </Stack.Item>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <PrimaryButton text="Yahooアカウントでサインイン"/>
                        </Stack.Item>
                    </Stack>
                </Stack>
            </Stack.Item>
            <Stack.Item grow={1} styles={stackItemStyles}>
                <Stack tokens={outerStackTokens} style={{position:"absolute", top: 200, right: 550, width: 400}}>
                    <Stack styles={stackStyles} tokens={innerStackTokens}>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <TextField placeholder="ユーザー名 または メールアドレス" style={{width: 300}}/>
                        </Stack.Item>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <TextField placeholder="パスワード" style={{width: 300}}/>
                        </Stack.Item>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <Link href="" style={{color: "white", position: "relative", right: 70, bottom: 20}}>パスワードを忘れた場合</Link>
                        </Stack.Item>
                        <Stack.Item grow={1} styles={stackItemStyles}>
                            <PrimaryButton text="会員ページにサインイン"/>
                        </Stack.Item>
                    </Stack>
                </Stack>
            </Stack.Item>
        </Stack>
        </>
    );
};

export default LoginSSO