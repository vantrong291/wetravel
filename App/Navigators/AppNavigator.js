import React from 'react'
import {
    createAppContainer,
    createMaterialTopTabNavigator,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation'
import Login from 'App/Screens/Login'
import Home from 'App/Screens/Home'
import Review from 'App/Screens/Review'
import Notifications from 'App/Screens/Notifications'
import Personal from 'App/Screens/Personal'
import TourDetail from 'App/Screens/TourDetail'
import TourOptions from 'App/Screens/TourOptions'
import TourPayment from 'App/Screens/TourPayment'
import TourBookingReview from 'App/Screens/TourBookingReview'
import TourBookingComplete from 'App/Screens/TourBookingComplete'
import ReviewDetail from 'App/Screens/ReviewDetail'
import AddCard from 'App/Screens/AddCard'
import PersonalInfomation from 'App/Screens/PersonalInfomation'
import ChangePassword from 'App/Screens/ChangePassword'
import SearchResults from 'App/Screens/SearchResults'
import ListTours from 'App/Screens/ListTours'
import ComingTours from 'App/Screens/ComingTours'
import RecentTours from 'App/Screens/RecentTours'
import Settings from 'App/Screens/Settings'
import ReviewEditor from 'App/Screens/ReviewEditor'
import RecentTourDetail from 'App/Screens/RecentTourDetail'

import CustomTabBar from './CustomTabBar'
import { Icon as EIcon, withBadge } from 'react-native-elements'
import { Config } from '../Config'
import CardList from '../Screens/CardList'

const notiNum = Math.floor(Math.random() * 10) + 1
const BadgedIcon = withBadge(notiNum)(EIcon)


const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({ tintColor }) => (
                    <EIcon type="ionicon" name="ios-home" color={tintColor} size={24}/>
                ),
            },
        },
        Review: {
            screen: Review,
            navigationOptions: {
                tabBarLabel: 'Bài viết',
                tabBarIcon: ({ tintColor }) => (
                    <EIcon type="ionicon" name="ios-star-half" color={tintColor} size={24}/>
                ),
            },
        },
        Notifications: {
            screen: Notifications,
            navigationOptions: ({}) => ({
                tabBarLabel: 'Thông báo',
                tabBarIcon: ({ tintColor }) => (
                    <BadgedIcon type="ionicon" name="ios-notifications" color={tintColor} size={24}/>
                ),
            }),
        },
        Personal: {
            screen: Personal,
            navigationOptions: {
                tabBarLabel: 'Cá nhân',
                tabBarIcon: ({ tintColor }) => (
                    <EIcon type="ionicon" name="ios-contact" color={tintColor} size={24}/>
                ),
            },
        },
    },
    {
        initialRouteName: 'Home',
        order: ['Home', 'Review', 'Notifications', 'Personal'],
        // activeTintColor: "#e91d62",
        // barStyle: { backgroundColor: '#f5f5f5' },
        // shifting:true

        // tabBarComponent: MyTabBar,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        optimizationsEnabled: true,
        tabBarOptions: {
            activeTintColor: '#1976D2',
            inactiveTintColor: 'grey',
            upperCaseLabel: false,
            pressColor: '#1976d224',
            pressOpacity: 1,
            labelStyle: {
                fontSize: 10,
                marginTop: 2,
                marginLeft: 0,
                marginRight: 0,
            },
            style: {
                backgroundColor: '#fff',
                borderTopWidth: 0.5,
                borderTopColor: 'grey',
                height: 50,
                // elevation: 3,
            },
            iconStyle: {},
            indicatorStyle: {
                height: 0,
            },
            showIcon: true,
            showLabel: true,
        },
        tabBarComponent: CustomTabBar,
    },
)

const StackNavigator = createStackNavigator(
    {
        Main: { screen: TabNavigator },
        TourDetail: TourDetail,
        TourOptions: TourOptions,
        TourPayment: TourPayment,
        TourBookingReview: TourBookingReview,
        TourBookingComplete: TourBookingComplete,
        ReviewDetail: ReviewDetail,
        AddCard: AddCard,
        PersonalInfomation: PersonalInfomation,
        ChangePassword: ChangePassword,
        ComingTours: ComingTours,
        RecentTours: RecentTours,
        Settings: Settings,
        SearchResults: SearchResults,
        ListTours: ListTours,
        ReviewEditor: ReviewEditor,
        RecentTourDetail: RecentTourDetail,
        CardList: CardList
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    },
)

const SwitchNavigator = createSwitchNavigator(
    {
        Login: Login,
        MainScreen: StackNavigator,
    },
    {
        initialRouteName: Config.PRODUCTION ? 'Login' : 'MainScreen',
        headerMode: 'none',
    },
)

export default createAppContainer(SwitchNavigator)
