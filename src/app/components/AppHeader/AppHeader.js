import React from "react";

import { EuiPageHeader, EuiPageHeaderSection, EuiTitle } from "@elastic/eui";

export default () => (
  <EuiPageHeader>
    <EuiPageHeaderSection>
      <EuiTitle size="l">
        <h1>Page title</h1>
      </EuiTitle>
    </EuiPageHeaderSection>
    <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
  </EuiPageHeader>
);
