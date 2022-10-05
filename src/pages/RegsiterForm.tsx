import * as React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextFieldControlledExample } from '../components/TextFieldControlledExample';

const RegisterForm: React.FunctionComponent = () => {
    const [name, setName] = React.useState<string>('');
    const [furigana, setFurigana] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [mailCheck, setMailCheck] = React.useState('');

    const sendInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
        const registerInfo = {
            'name': name,
            'furigana': furigana,
            'mail': mail,
            'mailCheck': mailCheck
        };
        console.log(registerInfo);
    }

    return (
        <>
            <h1>登録フォーム</h1>
            <TextFieldControlledExample setName={setName} setFurigana={setFurigana} setMail={setMail} setMailCheck={setMailCheck}/>
            <PrimaryButton onClick={sendInfo}/>
        </>
    );
}

export default RegisterForm