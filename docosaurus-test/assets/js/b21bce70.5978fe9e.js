"use strict";(self.webpackChunkdocosaurus_test=self.webpackChunkdocosaurus_test||[]).push([[4367],{2123:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(4848),s=a(8453);const r={slug:"image-test-eks-post",title:"Image Test EKS Post",authors:"Petr Ruzicka",categories:["EKS","Image","Pipelines"],tags:["EKS","Image","Pipeline Templates"]},o="Authentication",i={permalink:"/docosaurus-test/blog/image-test-eks-post",editUrl:"https://github.com/ruzickap/blog-test.ruzicka.dev/tree/main/docosaurus-test/blog/2020/2020-12-01-image-test/README.md",source:"@site/blog/2020/2020-12-01-image-test/README.md",title:"Image Test EKS Post",description:"Keycloak",date:"2020-12-01T00:00:00.000Z",tags:[{inline:!0,label:"EKS",permalink:"/docosaurus-test/blog/tags/eks"},{inline:!0,label:"Image",permalink:"/docosaurus-test/blog/tags/image"},{inline:!0,label:"Pipeline Templates",permalink:"/docosaurus-test/blog/tags/pipeline-templates"}],readingTime:7.1,hasTruncateMarker:!1,authors:[{name:"Petr Ruzicka",title:"Blog owner",url:"https://petr.ruzicka.dev",imageURL:"https://github.com/ruzickap.png",key:"Petr Ruzicka"}],frontMatter:{slug:"image-test-eks-post",title:"Image Test EKS Post",authors:"Petr Ruzicka",categories:["EKS","Image","Pipelines"],tags:["EKS","Image","Pipeline Templates"]},unlisted:!1,prevItem:{title:"Test EKS Post",permalink:"/docosaurus-test/blog/test-eks-post"},nextItem:{title:"Long Blog Post",permalink:"/docosaurus-test/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},l=[{value:"Keycloak",id:"keycloak",level:2},{value:"oauth2-proxy - Keycloak",id:"oauth2-proxy---keycloak",level:2},{value:"Dex",id:"dex",level:2},{value:"oauth2-proxy",id:"oauth2-proxy",level:2},{value:"Gangway",id:"gangway",level:2},{value:"kube-oidc-proxy",id:"kube-oidc-proxy",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"keycloak",children:"Keycloak"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"keycloak"}),"\n",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/bitnami/keycloak",children:"helm chart"}),"\nand modify the\n",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/charts/blob/master/bitnami/keycloak/values.yaml",children:"default values"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add --force-update bitnami https://charts.bitnami.com/bitnami\nhelm upgrade --install --version 5.0.6 --namespace keycloak --create-namespace --values - keycloak bitnami/keycloak << EOF\nclusterDomain: ${CLUSTER_FQDN}\nauth:\n  adminUser: admin\n  adminPassword: ${MY_PASSWORD}\n  managementUser: admin\n  managementPassword: ${MY_PASSWORD}\nproxyAddressForwarding: true\n# https://stackoverflow.com/questions/51616770/keycloak-restricting-user-management-to-certain-groups-while-enabling-manage-us\nextraStartupArgs: "-Dkeycloak.profile.feature.admin_fine_grained_authz=enabled"\n# keycloakConfigCli:\n#   enabled: true\n#   # Workaround for bug: https://github.com/bitnami/charts/issues/6823\n#   image:\n#     repository: adorsys/keycloak-config-cli\n#     tag: latest-15.0.1\n#   configuration:\n#     myrealm.yaml: |\n#       realm: myrealm\n#       enabled: true\n#       displayName: My Realm\n#       rememberMe: true\n#       userManagedAccessAllowed: true\n#       smtpServer:\n#         from: myrealm-keycloak@${CLUSTER_FQDN}\n#         fromDisplayName: Keycloak\n#         host: mailhog.mailhog.svc.cluster.local\n#         port: 1025\n#       clients:\n#       # https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider/#keycloak-auth-provider\n#       - clientId: oauth2-proxy-keycloak.${CLUSTER_FQDN}\n#         name: oauth2-proxy-keycloak.${CLUSTER_FQDN}\n#         description: "OAuth2 Proxy for Keycloak"\n#         secret: ${MY_PASSWORD}\n#         redirectUris:\n#         - "https://oauth2-proxy-keycloak.${CLUSTER_FQDN}/oauth2/callback"\n#         protocolMappers:\n#         - name: groupMapper\n#           protocol: openid-connect\n#           protocolMapper: oidc-group-membership-mapper\n#           config:\n#             userinfo.token.claim: "true"\n#             id.token.claim: "true"\n#             access.token.claim: "true"\n#             claim.name: groups\n#             full.path: "true"\n#       identityProviders:\n#       # https://ultimatesecurity.pro/post/okta-oidc/\n#       - alias: keycloak-oidc-okta\n#         displayName: "Okta"\n#         providerId: keycloak-oidc\n#         trustEmail: true\n#         config:\n#           clientId: ${OKTA_CLIENT_ID}\n#           clientSecret: ${OKTA_CLIENT_SECRET}\n#           tokenUrl: "${OKTA_ISSUER}/oauth2/default/v1/token"\n#           authorizationUrl: "${OKTA_ISSUER}/oauth2/default/v1/authorize"\n#           defaultScope: "openid profile email"\n#           syncMode: IMPORT\n#       - alias: dex\n#         displayName: "Dex"\n#         providerId: keycloak-oidc\n#         trustEmail: true\n#         config:\n#           clientId: keycloak.${CLUSTER_FQDN}\n#           clientSecret: ${MY_PASSWORD}\n#           tokenUrl: https://dex.${CLUSTER_FQDN}/token\n#           authorizationUrl: https://dex.${CLUSTER_FQDN}/auth\n#           syncMode: IMPORT\n#       - alias: github\n#         displayName: "Github"\n#         providerId: github\n#         trustEmail: true\n#         config:\n#           clientId: ${MY_GITHUB_ORG_OAUTH_KEYCLOAK_CLIENT_ID}\n#           clientSecret: ${MY_GITHUB_ORG_OAUTH_KEYCLOAK_CLIENT_SECRET}\n#       users:\n#       - username: myuser1\n#         email: myuser1@${CLUSTER_FQDN}\n#         enabled: true\n#         firstName: My Firstname 1\n#         lastName: My Lastname 1\n#         groups:\n#           - group-admins\n#         credentials:\n#         - type: password\n#           value: ${MY_PASSWORD}\n#       - username: myuser2\n#         email: myuser2@${CLUSTER_FQDN}\n#         enabled: true\n#         firstName: My Firstname 2\n#         lastName: My Lastname 2\n#         groups:\n#           - group-admins\n#         credentials:\n#         - type: password\n#           value: ${MY_PASSWORD}\n#       - username: myuser3\n#         email: myuser3@${CLUSTER_FQDN}\n#         enabled: true\n#         firstName: My Firstname 3\n#         lastName: My Lastname 3\n#         groups:\n#           - group-users\n#         credentials:\n#         - type: password\n#           value: ${MY_PASSWORD}\n#       - username: myuser4\n#         email: myuser4@${CLUSTER_FQDN}\n#         enabled: true\n#         firstName: My Firstname 4\n#         lastName: My Lastname 4\n#         groups:\n#           - group-users\n#           - group-test\n#         credentials:\n#         - type: password\n#           value: ${MY_PASSWORD}\n#       groups:\n#       - name: group-users\n#       - name: group-admins\n#       - name: group-test\nservice:\n  type: ClusterIP\ningress:\n  enabled: true\n  hostname: keycloak.${CLUSTER_FQDN}\n  extraTls:\n  - hosts:\n      - keycloak.${CLUSTER_FQDN}\n    secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\nnetworkPolicy:\n  enabled: true\nmetrics:\n  enabled: true\n  serviceMonitor:\n    enabled: true\npostgresql:\n  persistence:\n    enabled: false\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"oauth2-proxy---keycloak",children:"oauth2-proxy - Keycloak"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://github.com/oauth2-proxy/oauth2-proxy",children:"oauth2-proxy"})," to secure\nthe endpoints like (",(0,t.jsx)(n.code,{children:"prometheus."}),", ",(0,t.jsx)(n.code,{children:"alertmanager."}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"oauth2-proxy"}),"\n",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/oauth2-proxy/oauth2-proxy",children:"helm chart"}),"\nand modify the\n",(0,t.jsx)(n.a,{href:"https://github.com/oauth2-proxy/manifests/blob/main/helm/oauth2-proxy/values.yaml",children:"default values"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add --force-update oauth2-proxy https://oauth2-proxy.github.io/manifests\nhelm upgrade --install --version 4.2.0 --namespace oauth2-proxy-keycloak --create-namespace --values - oauth2-proxy oauth2-proxy/oauth2-proxy << EOF\nconfig:\n  clientID: oauth2-proxy-keycloak.${CLUSTER_FQDN}\n  clientSecret: "${MY_PASSWORD}"\n  cookieSecret: "$(openssl rand -base64 32 | head -c 32 | base64)"\n  configFile: |-\n    email_domains = [ "*" ]\n    upstreams = [ "file:///dev/null" ]\n    whitelist_domains = ".${CLUSTER_FQDN}"\n    cookie_domains = ".${CLUSTER_FQDN}"\n    provider = "keycloak"\n    login_url = "https://keycloak.${CLUSTER_FQDN}/auth/realms/myrealm/protocol/openid-connect/auth"\n    redeem_url = "https://keycloak.${CLUSTER_FQDN}/auth/realms/myrealm/protocol/openid-connect/token"\n    profile_url = "https://keycloak.${CLUSTER_FQDN}/auth/realms/myrealm/protocol/openid-connect/userinfo"\n    validate_url = "https://keycloak.${CLUSTER_FQDN}/auth/realms/myrealm/protocol/openid-connect/userinfo"\n    scope = "openid email profile"\n    ssl_insecure_skip_verify = "true"\n    insecure_oidc_skip_issuer_verification = "true"\ningress:\n  enabled: true\n  hosts:\n    - oauth2-proxy-keycloak.${CLUSTER_FQDN}\n  tls:\n    - secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\n      hosts:\n        - oauth2-proxy-keycloak.${CLUSTER_FQDN}\nmetrics:\n  servicemonitor:\n    enabled: true\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dex",children:"Dex"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"dex"}),"\n",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/dex/dex",children:"helm chart"}),"\nand modify the\n",(0,t.jsx)(n.a,{href:"https://github.com/dexidp/helm-charts/blob/master/charts/dex/values.yaml",children:"default values"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add --force-update dex https://charts.dexidp.io\nhelm upgrade --install --version 0.6.0 --namespace dex --create-namespace --values - dex dex/dex << EOF\ningress:\n  enabled: true\n  annotations:\n    nginx.ingress.kubernetes.io/ssl-redirect: "false"\n  hosts:\n    - host: dex.${CLUSTER_FQDN}\n      paths:\n        - path: /\n          pathType: ImplementationSpecific\n  tls:\n    - secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\n      hosts:\n        - dex.${CLUSTER_FQDN}\nconfig:\n  issuer: https://dex.${CLUSTER_FQDN}\n  storage:\n    type: kubernetes\n    config:\n      inCluster: true\n  oauth2:\n    skipApprovalScreen: true\n  connectors:\n    - type: github\n      id: github\n      name: GitHub\n      config:\n        clientID: ${MY_GITHUB_ORG_OAUTH_DEX_CLIENT_ID}\n        clientSecret: ${MY_GITHUB_ORG_OAUTH_DEX_CLIENT_SECRET}\n        redirectURI: https://dex.${CLUSTER_FQDN}/callback\n        orgs:\n          - name: ${MY_GITHUB_ORG_NAME}\n    - type: oidc\n      id: okta\n      name: Okta\n      config:\n        issuer: ${OKTA_ISSUER}\n        clientID: ${OKTA_CLIENT_ID}\n        clientSecret: ${OKTA_CLIENT_SECRET}\n        redirectURI: https://dex.${CLUSTER_FQDN}/callback\n        scopes:\n          - openid\n          - profile\n          - email\n        getUserInfo: true\n  staticClients:\n    - id: argocd.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://argocd.${CLUSTER_FQDN}/auth/callback\n      name: ArgoCD\n      secret: ${MY_PASSWORD}\n    - id: gangway.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://gangway.${CLUSTER_FQDN}/callback\n      name: Gangway\n      secret: ${MY_PASSWORD}\n    - id: harbor.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://harbor.${CLUSTER_FQDN}/c/oidc/callback\n      name: Harbor\n      secret: ${MY_PASSWORD}\n    - id: kiali.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://kiali.${CLUSTER_FQDN}\n      name: Kiali\n      secret: ${MY_PASSWORD}\n    - id: keycloak.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://keycloak.${CLUSTER_FQDN}/auth/realms/myrealm/broker/dex/endpoint\n      name: Keycloak\n      secret: ${MY_PASSWORD}\n    - id: oauth2-proxy.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://oauth2-proxy.${CLUSTER_FQDN}/oauth2/callback\n      name: OAuth2 Proxy\n      secret: ${MY_PASSWORD}\n    - id: vault.${CLUSTER_FQDN}\n      redirectURIs:\n        - https://vault.${CLUSTER_FQDN}/ui/vault/auth/oidc/oidc/callback\n        - http://localhost:8250/oidc/callback\n      name: Vault\n      secret: ${MY_PASSWORD}\n  enablePasswordDB: false\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"oauth2-proxy",children:"oauth2-proxy"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://github.com/oauth2-proxy/oauth2-proxy",children:"oauth2-proxy"})," to secure\nthe endpoints like (",(0,t.jsx)(n.code,{children:"prometheus."}),", ",(0,t.jsx)(n.code,{children:"alertmanager."}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"oauth2-proxy"}),"\n",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/oauth2-proxy/oauth2-proxy",children:"helm chart"}),"\nand modify the\n",(0,t.jsx)(n.a,{href:"https://github.com/oauth2-proxy/manifests/blob/main/helm/oauth2-proxy/values.yaml",children:"default values"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm upgrade --install --version 4.2.0 --namespace oauth2-proxy --create-namespace --values - oauth2-proxy oauth2-proxy/oauth2-proxy << EOF\nconfig:\n  clientID: oauth2-proxy.${CLUSTER_FQDN}\n  clientSecret: "${MY_PASSWORD}"\n  cookieSecret: "$(openssl rand -base64 32 | head -c 32 | base64)"\n  configFile: |-\n    email_domains = [ "*" ]\n    upstreams = [ "file:///dev/null" ]\n    whitelist_domains = ".${CLUSTER_FQDN}"\n    cookie_domains = ".${CLUSTER_FQDN}"\n    provider = "oidc"\n    oidc_issuer_url = "https://dex.${CLUSTER_FQDN}"\n    ssl_insecure_skip_verify = "true"\n    insecure_oidc_skip_issuer_verification = "true"\ningress:\n  enabled: true\n  hosts:\n    - oauth2-proxy.${CLUSTER_FQDN}\n  tls:\n    - secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\n      hosts:\n        - oauth2-proxy.${CLUSTER_FQDN}\nmetrics:\n  servicemonitor:\n    enabled: true\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"gangway",children:"Gangway"}),"\n",(0,t.jsx)(n.p,{children:"Install gangway:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'helm repo add --force-update stable https://charts.helm.sh/stable\nhelm upgrade --install --version 0.4.5 --namespace gangway --create-namespace --values - gangway stable/gangway << EOF\n# https://github.com/helm/charts/blob/master/stable/gangway/values.yaml\ntrustedCACert: |\n$(curl -s "${LETSENCRYPT_CERTIFICATE}" | sed "s/^/  /")\ngangway:\n  clusterName: ${CLUSTER_FQDN}\n  authorizeURL: https://dex.${CLUSTER_FQDN}/auth\n  tokenURL: https://dex.${CLUSTER_FQDN}/token\n  audience: https://dex.${CLUSTER_FQDN}/userinfo\n  redirectURL: https://gangway.${CLUSTER_FQDN}/callback\n  clientID: gangway.${CLUSTER_FQDN}\n  clientSecret: ${MY_PASSWORD}\n  apiServerURL: https://kube-oidc-proxy.${CLUSTER_FQDN}\ningress:\n  enabled: true\n  annotations:\n    nginx.ingress.kubernetes.io/auth-url: https://oauth2-proxy.${CLUSTER_FQDN}/oauth2/auth\n    nginx.ingress.kubernetes.io/auth-signin: https://oauth2-proxy.${CLUSTER_FQDN}/oauth2/start?rd=\\$scheme://\\$host\\$request_uri\n  hosts:\n    - gangway.${CLUSTER_FQDN}\n  tls:\n    - secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\n      hosts:\n        - gangway.${CLUSTER_FQDN}\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"kube-oidc-proxy",children:"kube-oidc-proxy"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"kube-oidc-proxy"})," accepting connections only via HTTPS. It's necessary to\nconfigure ingress to communicate with the backend over HTTPS."]}),"\n",(0,t.jsx)(n.p,{children:"Install kube-oidc-proxy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'test -d "tmp/${CLUSTER_FQDN}/kube-oidc-proxy" || git clone --quiet https://github.com/jetstack/kube-oidc-proxy.git "tmp/${CLUSTER_FQDN}/kube-oidc-proxy"\ngit -C "tmp/${CLUSTER_FQDN}/kube-oidc-proxy" checkout --quiet v0.3.0\n\nhelm upgrade --install --namespace kube-oidc-proxy --create-namespace --values - kube-oidc-proxy "tmp/${CLUSTER_FQDN}/kube-oidc-proxy/deploy/charts/kube-oidc-proxy" << EOF\n# https://github.com/jetstack/kube-oidc-proxy/blob/master/deploy/charts/kube-oidc-proxy/values.yaml\noidc:\n  clientId: gangway.${CLUSTER_FQDN}\n  issuerUrl: https://dex.${CLUSTER_FQDN}\n  usernameClaim: email\n  caPEM: |\n$(curl -s "${LETSENCRYPT_CERTIFICATE}" | sed "s/^/    /")\ningress:\n  annotations:\n    nginx.ingress.kubernetes.io/backend-protocol: HTTPS\n  enabled: true\n  hosts:\n    - host: kube-oidc-proxy.${CLUSTER_FQDN}\n      paths:\n        - /\n  tls:\n   - secretName: ingress-cert-${LETSENCRYPT_ENVIRONMENT}\n     hosts:\n       - kube-oidc-proxy.${CLUSTER_FQDN}\nEOF\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you get the credentials form the ",(0,t.jsx)(n.a,{href:"https://gangway.kube1.k8s.mylabs.dev",children:"https://gangway.kube1.k8s.mylabs.dev"}),"\nyou will have the access to the cluster, but no rights there."]}),"\n",(0,t.jsx)(n.p,{children:"Add access rights to the user:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl apply -f - << EOF\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: kube-prometheus-stack\n  name: secret-reader\nrules:\n- apiGroups: [""]\n  resources: ["secrets"]\n  verbs: ["get", "watch", "list"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-secrets\n  namespace: kube-prometheus-stack\nsubjects:\n- kind: User\n  name: ${MY_EMAIL}\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: Role\n  name: secret-reader\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: pods-reader\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "watch", "list"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: read-pods\nsubjects:\n- kind: User\n  name: ${MY_EMAIL}\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: pods-reader\n  apiGroup: rbac.authorization.k8s.io\nEOF\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The user should be able to read the secrets in ",(0,t.jsx)(n.code,{children:"kube-prometheus-stack"}),"\nnamespace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl describe secrets --insecure-skip-tls-verify -n kube-prometheus-stack "ingress-cert-${LETSENCRYPT_ENVIRONMENT}" # DevSkim: ignore DS126188\n'})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Name:         ingress-cert-staging\nNamespace:    kube-prometheus-stack\nLabels:       kubed.appscode.com/origin.cluster=kube1.k8s.mylabs.dev\n              kubed.appscode.com/origin.name=ingress-cert-staging\n              kubed.appscode.com/origin.namespace=cert-manager\nAnnotations:  cert-manager.io/alt-names: *.kube1.k8s.mylabs.dev,kube1.k8s.mylabs.dev\n              cert-manager.io/certificate-name: ingress-cert-staging\n              cert-manager.io/common-name: *.kube1.k8s.mylabs.dev\n              cert-manager.io/ip-sans:\n              cert-manager.io/issuer-group:\n              cert-manager.io/issuer-kind: ClusterIssuer\n              cert-manager.io/issuer-name: letsencrypt-staging-dns\n              cert-manager.io/uri-sans:\n              kubed.appscode.com/origin:\n                {"namespace":"cert-manager","name":"ingress-cert-staging","uid":"f1ed062c-23d9-4cf7-ad51-cfafd8a3b788","resourceVersion":"5296"}\n\nType:  kubernetes.io/tls\n\nData\n====\ntls.crt:  3586 bytes\ntls.key:  1679 bytes\n'})}),"\n",(0,t.jsx)(n.p,{children:"But it's not allowed to delete the secrets for the user:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl delete secrets --insecure-skip-tls-verify -n kube-prometheus-stack "ingress-cert-${LETSENCRYPT_ENVIRONMENT}"   # DevSkim: ignore DS126188\n'})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Error from server (Forbidden): secrets "ingress-cert-staging" is forbidden: User "petr.ruzicka@gmail.com" cannot delete resource "secrets" in API group "" in the namespace "kube-prometheus-stack"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The user can not read secrets outside the ",(0,t.jsx)(n.code,{children:"kube-prometheus-stack"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get secrets --insecure-skip-tls-verify -n kube-system                                                          # DevSkim: ignore DS126188\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Error from server (Forbidden): secrets is forbidden: User "petr.ruzicka@gmail.com" cannot list resource "secrets" in API group "" in the namespace "kube-system"\n'})}),"\n",(0,t.jsx)(n.p,{children:'You can see the pods "everywhere":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get pods --insecure-skip-tls-verify -n kube-system                                                             # DevSkim: ignore DS126188\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"NAME                                                         READY   STATUS    RESTARTS   AGE\naws-for-fluent-bit-5hxlt                                     1/1     Running   0          32m\naws-for-fluent-bit-dmvzq                                     1/1     Running   0          32m\naws-node-ggfft                                               1/1     Running   0          32m\naws-node-lhlvf                                               1/1     Running   0          32m\ncluster-autoscaler-aws-cluster-autoscaler-7f878bccc8-s279k   1/1     Running   0          25m\ncoredns-59b69b4849-6v487                                     1/1     Running   0          46m\ncoredns-59b69b4849-tw2dg                                     1/1     Running   0          46m\nebs-csi-controller-86785d75db-7brbr                          5/5     Running   0          31m\nebs-csi-controller-86785d75db-gn4ll                          5/5     Running   0          31m\nebs-csi-node-6h9zv                                           3/3     Running   0          31m\nebs-csi-node-r5rj7                                           3/3     Running   0          31m\nkube-proxy-m6dm8                                             1/1     Running   0          32m\nkube-proxy-pdmv9                                             1/1     Running   0          32m\n"})}),"\n",(0,t.jsx)(n.p,{children:"But you can not delete them:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl delete pods --insecure-skip-tls-verify -n kube-oidc-proxy --all                                                # DevSkim: ignore DS126188\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'Error from server (Forbidden): pods "kube-oidc-proxy-74bf5679fd-jhdmr" is forbidden: User "petr.ruzicka@gmail.com" cannot delete resource "pods" in API group "" in the namespace "kube-oidc-proxy"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);