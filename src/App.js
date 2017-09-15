import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

    clickHandler() {
        // alert('hello');

        let requestUrl = 'https://sas-api.aliyuncs.com/?Action=GetIpProfile';

        let paramsMap = new Map();
        paramsMap.set('Ip','127.0.0.1');
        paramsMap.set('SensType','6');
        paramsMap.set('BusinessType','2');
        paramsMap.set('RequestUrl','http://fanxing.kugou.com');
        paramsMap.set('UserAgent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36');
        paramsMap.set('DeviceIdMd5','xxxxx');
        paramsMap.set('Os','Windows');
        paramsMap.set('DeviceType','PC');
        paramsMap.set('Carrier','5');

        //公共参数
        paramsMap.set('Format','JSON');
        paramsMap.set('Version','2017-07-05');
        paramsMap.set('AccessKeyId','sssss');
        // paramsMap.set('Signature','5');
        paramsMap.set('SignatureMethod','HMAC-SHA1');
        paramsMap.set('Timestamp','2017-03-23T06:59:55Z');
        paramsMap.set('SignatureVersion','1.0');
        paramsMap.set('SignatureNonce','2222');

        //按字母进行排序
        console.log(paramsMap.size);
        let paramKeyArray = [];
        console.log(paramKeyArray.length);
        for (let key of paramsMap.keys()) {
            paramKeyArray.push(key);
        }
        console.log(paramKeyArray.join(','));
        paramKeyArray.sort();
        console.log(paramKeyArray.join(','));

        encodeURIComponent();

        $.get(requestUrl, function (data) {
            console.log('this is data!');
        });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <div>
              <input type="text"/>
              <button onClick={this.clickHandler}>clickme!</button>
          </div>
      </div>
    );
  }
}

export default App;
