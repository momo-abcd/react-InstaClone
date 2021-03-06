import React from 'react';
import './LoginForm.css';
import axios from 'axios';
import { BrowserRouter, Link} from 'react-router-dom';


// function postLogin(){
//     async () => {
//         const res = await axios.post('/login',{
//             params: {
//                 foo:'bar'
//             }
//         });
//     }
// }
function LoginForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[1].value)
        // async () => {
            const res = axios.post('/login',{
                email:event.target[0].value,
                password:event.target[1].value
            });
        // }
        res.then((a) => console.log(a.data));
    }
    
    return (
        <div>
            <div className="borderBox">
                <div className="logo"><img src="/images/logo.png" draggable="false" alt="logo" /></div>
                <form onSubmit={handleSubmit}>
                    <div className="inputId">
                        <input type="text" required />
                        <label htmlFor="email">전화번호 사용자 이름 또는 이메일</label>
                    </div>
                    <div className="inputPassword">
                        <input type="password" name="" id="password" required />
                        <label htmlFor="password">비밀번호</label>
                    </div>
                    <button className="loginBtn" type="submit"> 로그인 </button>
                </form>
                <div className="or">
                    <div className="s311c"></div>
                    <div className="orText">또는</div>
                    <div className="s311c"></div>
                </div>

                <button className="loginFb">
                    <span className="fbLogo"><img src="/images/fbLogo.png" alt="fbLogo" /></span>
                Facebook으로 로그인
            </button>
                <div className="findPassword">비밀번호를 잊으셨나요?</div>
            </div>

            <div className="borderBox register">
                <p className="register">계정이 없으신가요? <Link to="/accounts/emailsignup"><span>가입하기</span></Link></p>
            </div>

            <div className="downApp">
                <p>앱을 다운로드하세요.</p>
                <div className="downImg">
                    <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"><img src="/images/appStore.png" alt="appStore" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D3F5BD966-376D-4CEB-87F4-82B6271BE459%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="/images/googlePlay.png" alt="googlePlay" /></a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;