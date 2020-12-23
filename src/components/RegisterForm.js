import React from 'react';
import './RegisterForm.css';
import axios from 'axios';

function ReigsterForm(props) {
    const postRegister = (e)=>{
        e.preventDefault();
        const regiInfo = {
            email:e.target[0],
            name:e.target[1],
            nickname:e.target[2],
            password:e.target[3],
        }
        const res = axios.post('/accounts/emailsignup',
            {
                email:e.target[0].value,
                name:e.target[1].value,
                nickname:e.target[2].value,
                password:e.target[3].value,
            }
        ).then((a) => console.log(13)).catch((err) => console.log(err));
        
        
        // for(let i=0;i<4;i++){
        //     console.log(e.target[i].value);
        // }
    }

    return (
        <div className="ReFo">
            <div className="block">
                <div className="borderBox">
                    <div className="ReFo-logo"><img src="/images/logo.png" draggable="false" alt="logo" /></div>
                    <h2 className="regiIntro">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                    <div className="or">
                        <div className="s311c"></div>
                        <div className="orText">또는</div>
                        <div className="s311c"></div>
                    </div>
                    <form onSubmit={postRegister}>
                        {/* input 요소들 */}
                        <div className="inputText">
                            <input type="text" required />
                            <label htmlFor="email">전화번호 사용자 이름 또는 이메일</label>
                        </div>
                        <div className="inputText">
                            <input type="text" required />
                            <label htmlFor="name">성명</label>
                        </div>
                        <div className="inputText">
                            <input type="text" required />
                            <label htmlFor="nickname">사용자 이름</label>
                        </div>
                        <div className="inputText">
                            <input type="text" required />
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <button className="btn" type="submit"> 가입 </button>
                    </form>
                    <p class="policy">가입하면 Instagram의 <a href="">약관</a>, <a href="">데이터 정책</a> <a href="">및 쿠키 정책</a>에 동의하게 됩니다.</p>
                </div>

                <div className="downApp">
                    <p>앱을 다운로드하세요.</p>
                    <div className="downImg">
                        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"><img src="/images/appStore.png" alt="appStore" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D3F5BD966-376D-4CEB-87F4-82B6271BE459%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="/images/googlePlay.png" alt="googlePlay" /></a>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ReigsterForm;