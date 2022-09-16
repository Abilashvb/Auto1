import * as React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout';
import Dashboard from './Dashboard';
import CarDetails from './carDetails/CarDetails';

const AppRoutes: React.FunctionComponent = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/details/:id" element={<CarDetails />} key="carDetails" />
                <Route path="/" element={<Dashboard />} key="dashboard" />
            </Routes>
        </Layout>
    </Router>
)

export default AppRoutes;