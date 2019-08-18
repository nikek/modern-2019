import React from 'react';

export function getProviderCapabilities() {
  const providers = [];
  const providerCapabilities = {
    registerProvider(Comp, props) {
      providers.push({
        Comp,
        props,
      });
    },
    AppProvider({ children }) {
      return providers.reduce((children, { Comp, props }) => {
        return <Comp {...props}>{children}</Comp>;
      }, children);
    },
  };

  return providerCapabilities;
}
