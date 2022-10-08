import * as React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextFieldControlledExample } from '../components/TextFieldControlledExample';

const RegisterForm: React.FunctionComponent = () => {
    // 関数コンポーネント内で状態管理
    const [name, setName] = React.useState<string>('');
    const [furigana, setFurigana] = React.useState<string>('');
    const [mail, setMail] = React.useState<string>('');
    const [mailCheck, setMailCheck] = React.useState<string>('');
    const [phoneNumber, setPhoneNumber] = React.useState<string>('');
    const [formerZipCode, setFormerZipCode] = React.useState<string>('');
    const [latterZipCode, setLatterZipCode] = React.useState<string>('');
    const [prefecture, setPrefecture] = React.useState('');
    const [city, setCity] = React.useState('');
    const [block, setBlock] = React.useState('');
    const [building, setBuilding] = React.useState('');

    const sendInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(checkMailPair()) {
            const registerInfo = {
                'name': name,
                'furigana': furigana,
                'mail': mail,
                'phone_number': phoneNumber,
                'zipcode': formerZipCode+'-'+latterZipCode
            };
            console.log(registerInfo);
        } else {
            console.log('メールアドレス不一致！');
            window.alert('メールアドレス不一致！');
        }
    };

    const checkMailPair = (): boolean => {
        if(mail === mailCheck) {
            return true
        }
        return false
    };

    return (
        <>
            <h1>登録フォーム</h1>
            <TextFieldControlledExample 
                setName={setName} 
                setFurigana={setFurigana} 
                setMail={setMail} 
                setMailCheck={setMailCheck}
                setPhoneNumber={setPhoneNumber}
                formerZipCode={formerZipCode}
                setFormerZipCode={setFormerZipCode}
                latterZipCode={latterZipCode}
                setLatterZipCode={setLatterZipCode}
                setPrefecture={setPrefecture}
                setCity={setCity}
                setBlock={setBlock}
                setBuilding={setBuilding}
            />
            <PrimaryButton onClick={sendInfo}/>
        </>
    );
}

export default RegisterForm