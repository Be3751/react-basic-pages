import * as React from 'react';
import { useState } from 'react';
import { DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { PrimaryButton } from '@fluentui/react/lib/Button';
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
const outerStackTokens: IStackTokens = { childrenGap: 5 };
const innerStackTokens: IStackTokens = {
childrenGap: 5,
padding: 10,
};

const OriginLogin: React.FunctionComponent = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeId = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => {
        setId(newValue || '');
        console.log(newValue);
    }

    return (
        <Stack.Item grow={1} styles={stackItemStyles}>
            <Stack tokens={outerStackTokens} style={{position:"absolute", top: 200, right: 550, width: 400}}>
                <Stack styles={stackStyles} tokens={innerStackTokens}>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <TextField value={id} onChange={onChangeId} placeholder="ユーザー名 または メールアドレス" style={{width: 300}}/>
                    </Stack.Item>
                    <Stack.Item grow={1} styles={stackItemStyles}>
                        <TextField value={pwd} placeholder="パスワード" style={{width: 300}}/>
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
    );
}

export default OriginLogin