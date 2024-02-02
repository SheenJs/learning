import 'package:flutter/material.dart';
import '../views/widget/drawer.dart';
import '../views/prop/color.dart';
import '../views/widget/appbar.dart';
import '../models/navItem.dart';
import '../views/widget/stateful.dart';
import '../views/widget/父子通讯.dart';
import '../views/widget/混合状态管理.dart';

class Routes {
  static final List<NavItem> route = [
    NavItem(
        path: LearnColor.routeName,
        title: '颜色属性',
        component: (ctx) => const LearnColor()),
    NavItem(
        path: LearnAppbar.routeName,
        title: 'Appbar',
        component: (ctx) => const LearnAppbar()),
    NavItem(
        path: DrawerTest.routeName,
        title: '抽屉',
        component: (ctx) => DrawerTest()),
    NavItem(
        path: LearnStatefulWidget.routeName,
        title: '状态组件',
        component: (xtx) => const LearnStatefulWidget()),
    NavItem(
        path: ParentWidget.routeName,
        title: '父子通讯',
        component: (xtx) => const ParentWidget()),
    NavItem(
        path: MixInState.routeName,
        title: '混合状态管理',
        component: (xtx) => const MixInState())
  ];

  static Map<String, Widget Function(BuildContext)> routes = {
    LearnColor.routeName: (ctx) => const LearnColor(),
    LearnAppbar.routeName: (ctx) => const LearnAppbar(),
    DrawerTest.routeName: (ctx) => DrawerTest(),
    LearnStatefulWidget.routeName: (xtx) => const LearnStatefulWidget(),
    ParentWidget.routeName: (xtx) => const ParentWidget(),
    MixInState.routeName: (xtx) => const MixInState(),
  };

  static const String initialRoute = '/';
}
