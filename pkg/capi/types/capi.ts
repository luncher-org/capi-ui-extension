export const CAPI_PRODUCT_NAME = 'capi-turtles';

export const BLANK_CLUSTER = '_';

export const LABELS = { AUTO_IMPORT: 'cluster-api.cattle.io/rancher-auto-import' };

export const CAPI = {
  CLUSTER_CLASS: 'cluster.x-k8s.io.clusterclass',
  PROVIDER:      'operator.cluster.x-k8s.io.infrastructureprovider',
};

// Includes bootrstap providers, control plane providers, and add-on providers:
// BOOTSTRAP_PROVIDERS = ['kubeadm', 'talos', 'microk8s', 'ocne', 'kubekey-k3s', 'rke2'];
// CP_PROVIDERS = ['kubeadm', 'talos', 'microk8s', 'nested', 'ocne', 'kubekey-k3s', 'kamaji', 'rke2'];
// ADD_ON_PROVIDERS = ['helm'];
export const NON_INFRASTRUCTURE_PROVIDERS = ['kubeadm', 'talos', 'microk8s', 'nested', 'ocne', 'kubekey-k3s', 'kamaji', 'rke2', 'helm'];

export const CP_VERSIONS = {
  'kubekey-k3s': ['k3s2'],
  rke2:          ['rke2r2']
};

export const CREDENTIALS_UPDATE_REQUIRED = ['aks'];
export const CREDENTIALS_NOT_REQUIRED = ['docker'];
