<template>
    <div class="layout">
        <Layout>
            <Header class="header" :style="{background: '#17233d'}">
                <div class="layout-logo">后台管理系统</div>
                <Row type="flex" justify="end">
                    <Col :md="2" :lg="2">
                        <div class="login">
                            <Dropdown @on-click="userSetting">
                                <a href="javascript:void(0)" class="drop-down">
                                    用户
                                    <Icon type="ios-contact"/>
                                </a>
                                <DropdownMenu slot="list">
                                    <!--<DropdownItem name="setting">设置</DropdownItem>-->
                                    <DropdownItem name="loginOut">退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Layout :style="{minHeight: '95vh'}">
                <Sider :style="{background: '#515a6e',boxShadow:'0px 0px 12px rgba(0,0,0,.2)'}">
                    <Menu active-name="2" theme="dark" width="auto"  accordion>
                        <Submenu :name=index+1 v-for="(item,index) in list" :key=index+1>
                            <template slot="title">
                                <Icon :type= item.icon />
                                {{item.title}}
                            </template>
                            <MenuItem :name=index-i+1 :to=meau.url v-for="(meau,i) in item.children" :key=i+1>
                                <Icon :type=meau.icon />
                                {{meau.name}}
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '12px 12px 12px'}">
                    <Content :style="{padding: '24px', background: '#f8f8f9', boxShadow:'0px 0px 8px rgba(0,0,0,.4)'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                list: [
                    {
                        icon: "ios-paper-plane",
                        title: '内外勤管理',
                        children: [
                            {
                                name: '外出审批单审批',
                                icon: 'md-jet',
                                url: '/out'
                            },
                            {
                                name: '请假审批单审批',
                                icon: 'md-remove-circle',
                                url: '/askLeave'
                            },
                            {
                                name: '出差审批单审批',
                                icon: 'ios-plane',
                                url: '/chuChai'
                            },
                            {
                                name: '加班审批单审批',
                                icon: 'ios-create',
                                url: '/overTime'
                            },
                        ]
                    },
                    // {
                    //     icon: "ios-stats",
                    //     title: '业务汇报',
                    //     children: [
                    //         {
                    //             name: '日/周/月/季报',
                    //             icon: 'md-trending-up',
                    //             url: '/daily'
                    //         },
                    //         {
                    //             name: '用户总结',
                    //             icon: 'logo-reddit',
                    //             url: '/summary'
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: "ios-book",
                    //     title: '行政管理',
                    //     children: [
                    //         {
                    //             name: '采购单审批',
                    //             icon: 'md-archive',
                    //             url: '/purchase'
                    //         },
                    //         {
                    //             name: '用车单审批',
                    //             icon: 'ios-car',
                    //             url: '/car'
                    //         },
                    //         {
                    //             name: '公章单申请',
                    //             icon: 'ios-disc',
                    //             url: '/seal'
                    //         },
                    //         {
                    //             name: '物品调用单审批',
                    //             icon: 'md-sync',
                    //             url: '/goods'
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: "ios-people",
                    //     title: '人事管理',
                    //     children: [
                    //         {
                    //             name: '人员入职填写',
                    //             icon: 'md-person-add',
                    //             url: '/addPer'
                    //         },
                    //         {
                    //             name: '人员调配审批',
                    //             icon: 'md-share-alt',
                    //             url: '/transferPer'
                    //         },
                    //         {
                    //             name: '人员离职审批',
                    //             icon: 'ios-undo',
                    //             url: '/leave'
                    //         },
                    //         {
                    //             name: '人员招聘审批',
                    //             icon: 'ios-woman',
                    //             url: '/recruitPer'
                    //         },
                    //         {
                    //             name: '部门查询',
                    //             icon: 'ios-aperture',
                    //             url: '/addDepart'
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: "ios-paper",
                    //     title: '客户管理',
                    //     children: [
                    //         {
                    //             name: '客户查询',
                    //             icon: 'md-paper',
                    //             url: '/queryCus'
                    //         },
                    //         {
                    //             name: '拜访客户',
                    //             icon: 'md-done-all',
                    //             url: '/visitCus'
                    //         },
                    //         {
                    //             name: '客户需求',
                    //             icon: 'ios-nuclear',
                    //             url: '/cusRequire'
                    //         },
                    //
                    //     ]
                    // },
                    // {
                    //     icon: "md-trending-up",
                    //     title: '事务统计',
                    //     children: [
                    //         {
                    //             name: '财务统计',
                    //             icon: 'md-pie',
                    //             url: '/finTj'
                    //         },
                    //         {
                    //             name: '请假统计',
                    //             icon: 'ios-alert-outline',
                    //             url: '/leaveTj'
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: "logo-yen",
                    //     title: '财务管理',
                    //     children: [
                    //         {
                    //             name: '报销单审批',
                    //             icon: 'logo-bitcoin',
                    //             url: '/expense'
                    //         },
                    //         {
                    //             name: '付款审批',
                    //             icon: 'logo-usd',
                    //             url: '/payment'
                    //         },
                    //         {
                    //             name: '财务预支审批',
                    //             icon: 'logo-playstation',
                    //             url: '/finAdvance'
                    //         },
                    //     ]
                    // },
                    // {
                    //     icon: "md-settings",
                    //     title: '权限管理',
                    //     children: [
                    //         {
                    //             name: 'APP角色',
                    //             icon: 'md-phone-portrait',
                    //             url: '/aPPRole'
                    //         },
                    //         {
                    //             name: 'PC角色',
                    //             icon: 'ios-laptop',
                    //             url: '/pCRole'
                    //         },
                    //         {
                    //             name: '用户添加',
                    //             icon: 'md-add-circle',
                    //             url: '/addUser'
                    //         },
                    //     ]
                    // },
                ],
                // isCollapsed: false
            }
        },

        // computed: {
        //     menuitemClasses: function () {
        //         return [
        //             'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
        //         ]
        //     }
        // },
        methods: {
            // change(name) {
            //     console.log(name);
            // },
            userSetting(name) {
                if (name === 'loginOut') {
                    this.$router.push('Login');
                    localStorage.clear('_token');
                }
            },
        }
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        /*height: inherit;*/
    }

    .header {
        height: 50px;
    }

    .layout-logo {
        width: 300px;
        height: 30px;
        color: #ff9900;
        letter-spacing: 3px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        line-height: 30px;
        /*background: #5b6270;*/
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: -91px;
    }

    .login {
        line-height: 50px;
    }

    .drop-down {
        font-size: 14px;
        color: #ebfffe;
    }

    /*.layout-nav {*/
    /*width: 420px;*/
    /*margin: 0 auto;*/
    /*margin-right: 20px;*/
    /*}*/

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

    /deep/ .ivu-layout-sider-trigger {
        background: transparent;
        color: #161bff;
        bottom: 15px;
    }

    /deep/ .ivu-layout-sider-trigger .ivu-icon {
        font-size: 20px;
    }
</style>
