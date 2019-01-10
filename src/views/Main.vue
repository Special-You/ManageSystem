<template>
    <div class="layout">
        <Layout>
            <Header class="header" :style="{background: '#22aeff'}">
                <!--<Menu theme="light" active-name="1">-->
                    <!---->
                    <!--&lt;!&ndash;<div class="layout-nav">&ndash;&gt;-->
                    <!--&lt;!&ndash;<MenuItem name="1">&ndash;&gt;-->
                            <!--&lt;!&ndash;<Icon type="ios-navigate"></Icon>&ndash;&gt;-->
                            <!--&lt;!&ndash;Item 1&ndash;&gt;-->
                        <!--&lt;!&ndash;</MenuItem>&ndash;&gt;-->
                        <!--&lt;!&ndash;<MenuItem name="2">&ndash;&gt;-->
                            <!--&lt;!&ndash;<Icon type="ios-keypad"></Icon>&ndash;&gt;-->
                            <!--&lt;!&ndash;Item 2&ndash;&gt;-->
                        <!--&lt;!&ndash;</MenuItem>&ndash;&gt;-->
                        <!--&lt;!&ndash;<MenuItem name="3">&ndash;&gt;-->
                            <!--&lt;!&ndash;<Icon type="ios-analytics"></Icon>&ndash;&gt;-->
                            <!--&lt;!&ndash;Item 3&ndash;&gt;-->
                        <!--&lt;!&ndash;</MenuItem>&ndash;&gt;-->
                        <!--&lt;!&ndash;<MenuItem name="4">&ndash;&gt;-->
                            <!--&lt;!&ndash;<Icon type="ios-paper"></Icon>&ndash;&gt;-->
                            <!--&lt;!&ndash;Item 4&ndash;&gt;-->
                        <!--&lt;!&ndash;</MenuItem>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</Menu>-->
                <div class="layout-logo"></div>
                <Row type="flex" justify="end">
                    <Col :md="2" :lg="2">
                        <div class="login">
                            <Dropdown @on-click="userSetting">
                                <a href="javascript:void(0)" class="drop-down">
                                    用户
                                    <Icon type="ios-contact"/>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="setting">设置</DropdownItem>
                                    <DropdownItem name="loginOut">退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout :style="{minHeight: '95vh'}">
                <Sider collapsible :collapsed-width = "0" v-model="isCollapsed" :style="{background: '#fff'}">
                    <Menu active-name="1" theme="light" width="auto" :open-names="['1']" :class="menuitemClasses">
                        <!--<Submenu name="1">-->
                            <!--<template slot="title">-->
                                <!--<Icon type="ios-navigate"></Icon>-->
                                <!--Item 1-->
                            <!--</template>-->
                            <!--<MenuItem name="1-1">Option 1</MenuItem>-->
                            <!--<MenuItem name="1-2">Option 2</MenuItem>-->
                            <!--<MenuItem name="1-3">Option 3</MenuItem>-->
                        <!--</Submenu>-->
                        <MenuItem name="1" to="/userManage">
                            <Icon type="ios-people" />
                            用户管理
                        </MenuItem>
                        <MenuItem name="2" to="/inOutManage">
                            <Icon type="ios-paper" />
                            内外勤管理
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '12px 12px 12px'}">
                    <Content :style="{padding: '24px', background: '#fff', boxShadow:'0px 0px 8px rgba(0,0,0,.5)'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    // import Header from '@/components/Header.vue'

    export default {
        name: "Main",
        data(){
            return {
                isCollapsed:false
            }
        },
        computed:{
            menuitemClasses:function () {
                return [
                    'menu-item',this.isCollapsed?'collapsed-menu':''
                ]
            }
        },
        methods:{
            userSetting(){

            }
        }
        // components: {
        //     Header
        // }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        //height: inherit;
    }
    .header {
        height: 40px;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: -10px;
    }
    .login {
        line-height: 40px;
    }
    .drop-down {
        font-size: 14px;
        color: #ffff20;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    /deep/ .ivu-layout-sider-trigger{
        background: transparent;
        color: #161bff;
        bottom: 15px;
    }
    /deep/ .ivu-layout-sider-trigger .ivu-icon {
        font-size: 20px;
    }
</style>
