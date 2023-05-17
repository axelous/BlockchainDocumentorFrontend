import { Route, Routes } from 'react-router-dom';
import { getRouteCategories, getRouteLogin, getRouteMain, getRoutePersonal, getRouteRegistration } from './routes';
import { MainPage } from 'pages/MainPage/MainPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { PersonalPage } from 'pages/PersonalPage/PersonalPage';
import { CategoriesPage } from 'pages/CategoriesPage/CategoriesPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={getRouteMain()}
                element={<MainPage />}
            />
            <Route
                path={getRouteLogin()}
                element={<LoginPage />}
            />
            <Route
                path={getRouteRegistration()}
                element={<RegistrationPage />}
            />
            <Route
                path={getRoutePersonal()}
                element={<PersonalPage />}
            />
            <Route
                path={getRouteCategories()}
                element={<CategoriesPage />}
            />
        </Routes>
    );
};
