import * as React from 'react';
import { PrimaryButton, DefaultButton } from '@fluentui/react';
import { TextFieldControlledExample } from '../components/TextFieldControlledExample';

const UserRegister: React.FunctionComponent = () => {
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
                'zipcode': formerZipCode+'-'+latterZipCode,
                'prefecture': prefecture,
                'city': city,
                'block': block,
                'building': building
            };
            console.log(registerInfo);
        } else {
            console.log('メールアドレス不一致！');
            window.alert('メールアドレス不一致！');
        }
    };

    const clearValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        setName("");
        setFurigana("");
        setMail("");
        setMailCheck("");
        setPhoneNumber("");
        setFormerZipCode("");
        setLatterZipCode("");
        setPrefecture("");
        setCity("");
        setBlock("");
        setBuilding("");
    };

    const checkMailPair = (): boolean => {
        if(mail === mailCheck) {
            return true
        }
        return false
    };

    return (
        <div style={{position: "absolute", top: 10, left: 100}}>
            <h1>登録フォーム</h1>
                <TextFieldControlledExample 
                    name={name}
                    setName={setName}
                    furigana={furigana}
                    setFurigana={setFurigana} 
                    mail={mail}
                    setMail={setMail} 
                    mailCheck={mailCheck}
                    setMailCheck={setMailCheck}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    formerZipCode={formerZipCode}
                    setFormerZipCode={setFormerZipCode}
                    latterZipCode={latterZipCode}
                    setLatterZipCode={setLatterZipCode}
                    prefecture={prefecture}
                    setPrefecture={setPrefecture}
                    city={city}
                    setCity={setCity}
                    block={block}
                    setBlock={setBlock}
                    building={building}
                    setBuilding={setBuilding}
                />
                <DefaultButton 
                    onClick={clearValue}
                    text="クリア"
                    style={{position: "relative", top: 20, left: 120}}
                />
                <PrimaryButton 
                    onClick={sendInfo}
                    text="送信"
                    style={{position: "relative", top: 20, left: 140}}
                />
        </div>
    );
}

export default UserRegister