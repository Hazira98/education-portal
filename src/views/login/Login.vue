<template>
    <a-layout>
        <div id="Login">
            <div id="carousel">
                <a-carousel autoplay>
                    <img src = "../../assets/Merry_C.jpg" class=cor1 >
                    <img src = "../../assets/Merry-Christmas.jpeg" class=cor1 >
                </a-carousel>
            </div>
            <div class="image">
            <img src = "../../assets/school.jpg" class=image>
            </div>
            <div class="form">
                <a-row type="flex" justify="center" align="middle">
                    <a-form
                        id="components-form-demo-normal-login"
                        :form="form"
                        class="login-form"
                        width="50%"
                        @submit="handleSubmit"
                    >
                        <a-form-item>
                            <a-row type=flex justify="center">
                            <h2>Login</h2>
                            </a-row>
                        </a-form-item>
                        <a-col>
                            <a-form-item>
                                <a-input
                                    v-decorator="[
                                    'userName',
                                    { rules: [{ required: true, message: 'Please input your username!' }] },
                                    ]"
                                    placeholder="Username"
                                >
                                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col>
                            <a-form-item>
                                <a-input
                                    v-decorator="[
                                    'password',
                                    { rules: [{ required: true, message: 'Please input your Password!' }] },
                                    ]"
                                    type="password"
                                    placeholder="Password"
                                >
                                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-item>
                        </a-col>
                        <a-col>
                            <a-form-item>
                                <a-checkbox
                                    v-decorator="[
                                    'remember',
                                    {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    },
                                    ]"
                                >
                                    Remember me
                                </a-checkbox>
                            <a class="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <router-link to="/User">
                                <a-button block shape="round" html-type="submit" class="login-form-button">
                                    Log in
                                </a-button>
                            </router-link>
                        
                            </a-form-item>
                        </a-col>
                    </a-form>
                </a-row>
            </div>
        </div>
        
    </a-layout>
</template>

<script>

export default {
    name: "Login",

    beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
        });
        },
         onChange(a, b, c) {
            console.log(a, b, c);
    },
    },
}
</script>

<style scoped>
    .ant-layout
    {
        background-color: #ffff;
    }
    .cor1
        {    
            
            height: 250px;
            border-radius: 50px;
            display: flex;
        }
    .ant-carousel
    {
        padding: 30px;
        max-width: 60%;
        display: block;
        margin: auto;
    }

    .ant-carousel >>> .slick  {
        color: black;
    }

    .image
    {
        
        height: 600px;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        position: static;
        z-index: 1;
        
    }

    .form
    {
        padding:30px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        justify-content: center;
        position: absolute; 
        z-index: 1;
        height: auto;
        top: 70% ;
        left: 40%; 
    }

    @media (max-width: 992px){
        .form
        {
            padding:30px;
            background: #fbfbfb;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            justify-content: center;
            position: absolute; 
            z-index: 1;
            height: auto;
            top: 70% ;
            left: 27%; 
        }
         .ant-carousel
        {
            padding: 30px;
            max-width: 80%;
            display: block;
            margin: auto;
        }
    }
    
    @media (max-width: 600px) {
         .form
        {
            padding:30px;
            background: #fbfbfb;
            border: 1px solid #d9d9d9;
            border-radius: 6px;
            justify-content: center;
            position: absolute; 
            z-index: 1;
            height: auto;
            top: 70% ;
            left: 15%; 
        }
        .ant-carousel
        {
            padding: 30px;
            max-width: 100%;
            display: block;
            margin: auto;
        }
    }

    .ant-input-affix-wrapper
    {
        height: 50px;
        
    }
    #components-form-demo-normal-login .login-form 
    {
        max-width: 300px;
        height: 60px;
        background-color: white;
    }
    #components-form-demo-normal-login .login-form-forgot 
    {
        float: right;
        color: #A9F37F;
    }
    #components-form-demo-normal-login .login-form-button 
    {
    background-image: linear-gradient(to right, #A0E878, #77C64A);
    width: 100%;
    height: 50px;
    color: white;
    }
    .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 250px;
    line-height: 160px;
    background: #ffff;
    overflow: hidden;
    }
</style>