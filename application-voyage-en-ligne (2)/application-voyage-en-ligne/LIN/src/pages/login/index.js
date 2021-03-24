import React, {Component} from 'react';
import {View, Text,Image,StyleSheet,Alert} from 'react-native';
import {pxToDp} from "../../utils/stylesKits";
import { Input } from 'react-native-elements';
import validator from '../../utils/validator';
import VFButton from "../../components/VFButton";
import Toast from "../../utils/Toast";
import {
    CodeField,
    Cursor,
  } from 'react-native-confirmation-code-field';


class Index extends Component {
    state={
        // Number
        phoneNumber:"",
        // Check the number
        phoneValid: true,
        // show the login page
        showLogin: true,
        // value of vCode
        vcodeText: "",
        // countDown Button text
        btnText: "Reacquire",
        // isIn countDown
        isCountDowning: false
    }
    
    // LoginBox 
    phoneNumberChangeText=(phoneNumber)=>{
        this.setState({phoneNumber});
    }
    //  number finish
    phoneNumberSubmitEditing=()=>{
        /**     
         * LoginPage -> CodePage
         * Timer
         */
        // validator.validatePhone
        const {phoneNumber} = this.state;
        const phoneValid = validator.validatePhone(phoneNumber);
        if(!phoneValid){
            // Incorrect
            this.setState({ phoneValid });
            return;
        }

        // Correct show the page Vcode 
        this.setState({ showLogin: false});
        // Start Timer
        this.countDown();
    }

    // Start get vcode timer
    countDown=()=> {
        if(this.state.isCountDowning){
            return; 
        }
        this.setState({isCountDowning: true});
        let seconds = 5;
        // reacquire(5s)
        this.setState({btnText:`Reacquire(${seconds}s)`})
        let timeId = setInterval(() =>{
            seconds--;
            this.setState({btnText:`Reacquire(${seconds}s)`});
            if(seconds === 0) {
                clearInterval(timeId);
                this.setState({btnText: "Reacquire", isCountDowning:false});
            }
        }, 1000);
    }

    // After enter the vcode
    onVcodeSubmitEditing=()=>{
        /**
         * check the vcode length
         * send to the backend
         * 
         */
        const {vcodeText, phoneNumber} = this.state;
        if(vcodeText.length != 6) {
            Toast.message("Incorrect vcode", 2000, "center");
            return;
        }

        
        if(vcodeText == "123456") {
            Alert.alert('Information','Login successful');
            this.props.navigation.navigate("Accueil");
            this.state.showLogin = true;
            this.state.vcodeText = '';
            this.state.phoneValid = true;
            this.state.phoneNumber = '';
        }
    }

    

    // Rendering the loading page
    renderLogin=()=>{
        const {phoneNumber, phoneValid} = this.state;
        return <View>
        {/* Login start */}
        {/* Title */}
        <View><Text style={{fontSize:pxToDp(25),color:"#888",fontWeight:"bold"}}>Telephone:</Text></View>
        {/* InputBox */}
        <View style={{marginTop:pxToDp(30)}}>
        <Input
placeholder='Please enter the telephone number'
maxLength={10}
value= {phoneNumber}
inputStyle={{color: "#333"}}
onChangeText={this.phoneNumberChangeText}
errorMessage={phoneValid ? "" : "Incorrect format of phone number"}
onSubmitEditing={this.phoneNumberSubmitEditing}
leftIcon={{ type: 'font-awesome', name: 'phone',color:"#ccc",size:pxToDp(20) }}
/>
        </View>
        {/* Button */}
        <View>
            <View style={{width:"85%",height:pxToDp(40), alignSelf:"center"}}>
                <VFButton onPress={this.phoneNumberSubmitEditing} style={{borderRadius:pxToDp(20)}}>Connexion</VFButton>
            </View>
        </View>
    </View> 
    }

    // Click Reget the code
    repGetVcode=()=> {
        this.countDown();
    }
    // rendering the code page
    renderVcode=()=>{
        const {phoneNumber,vcodeText,btnText,isCountDowning} = this.state;
        return <View>
            <View><Text style={{fontSize:pxToDp(25), color:"#888", fontWeight:"bold"}}>Enter the verification code </Text></View>
            <View style={{marginTop:pxToDp(15)}}><Text style={{color:"#888"}}>Already sent to +33 {phoneNumber.substring(1)} </Text></View>
            <View><CodeField
          value={vcodeText}
          onChangeText={this.onVcodeChangeText}
          onSubmitEditing={this.onVcodeSubmitEditing}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              >
              {symbol || (isFocused ? <Cursor /> : null)}</Text>
          )}
        />
            </View>
            <View style={{marginTop:pxToDp(20)}}><VFButton disabled={isCountDowning} onPress={this.repGetVcode} style = {{width:"85%",height:pxToDp(40), alignSelf:"center", borderRadius:pxToDp(20)}}>{btnText}</VFButton></View>
        </View>
    }

    // vcode input box change 
    onVcodeChangeText=(vcodeText)=>{
        this.setState({vcodeText});
    }
    render() {
        const {phoneNumber, phoneValid, showLogin} = this.state;
        return(
            <View style={{marginTop:40}}>
                {/* {backgroundImage} */}
                <Image style={{width:"100%", height:pxToDp(250)}}source={require("../../res/logo.png")}></Image>
                {/* Content start*/}
                <View style={{padding:pxToDp(20)}}>
                    {showLogin? this.renderLogin(): this.renderVcode()}
                    
                {/* Content end*/}
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
    //   borderBottomWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      color: '#87CEEB'
    },
    focusCell: {
      borderColor: '#87CEEB',
    },
  });

export default Index;