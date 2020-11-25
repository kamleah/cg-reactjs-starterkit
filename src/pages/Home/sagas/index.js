import { takeEvery } from 'redux-saga/effects';
import {
    HOME_DASHBOARD_DETAILS } from '../redux/types';
import {
    homeDashboardDetails } from './HomeSaga';

export const homeDetailsSaga = [
    takeEvery(HOME_DASHBOARD_DETAILS, homeDashboardDetails)
];
