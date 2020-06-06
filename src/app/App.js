import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_dark.css";

import { EuiPage, EuiPageBody, EuiPageContent } from "@elastic/eui";

import AppSidebar from "./components/AppSidebar/AppSidebar";
import AppHeader from "./components/AppHeader/AppHeader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import ArticleListPage from "./modules/articles/pages/ArticleListPage/ArticleListPage";

export default () => (
  <EuiPage>
    <AppSidebar />
    <EuiPageBody component="div">
      <AppHeader />
      <EuiPageContent>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ArticleListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);
