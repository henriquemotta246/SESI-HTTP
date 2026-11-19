/* INICIAR PACOTE NODE
npm init -y

INSTALAR PACOTES NODE
npm install 

INSTALAR  BIBLIOTECA EXPRESS(REQUISIÇÕES HTTP)
npm install expres

INICIAR SERVIDOR 
node server.js
        -> nome do arquivo que o servidor 
*/

/*HTTP — Resumo Ultra-Direto para Exercícios
O que é: Protocolo da camada de aplicação (Cliente pede -> Servidor responde).

Stateless: Sem memória entre requisições (usa Cookies/Tokens para manter login).

Portas: 80 (HTTP) | 443 (HTTPS = HTTP + criptografia TLS).

Métodos (Verbos)
GET: Lê dados (Seguro e Idempotente).

POST: Cria recurso (Não idempotente).

PUT: Substitui recurso inteiro (Idempotente).

PATCH: Atualiza parcialmente (Não idempotente).

DELETE: Apaga recurso (Idempotente).

HEAD: Igual ao GET, mas retorna só cabeçalhos (sem corpo).

OPTIONS: Consulta métodos permitidos (usado no CORS).

Códigos de Status (Os que caem em prova)
1xx (Info): 100 Continue | 101 Switching Protocols (WebSocket).

2xx (Sucesso): 200 OK | 201 Created (POST) | 204 No Content (sucesso sem corpo).

3xx (Redirecionamento): 301 Permanente | 302 Temporário | 304 Not Modified (Cache).

4xx — Erro do Cliente (Pedido inválido):

400 Bad Request: Sintaxe/dados malformados.

401 Unauthorized: Não autenticado (sem login/token).

403 Forbidden: Autenticado, mas sem permissão.

404 Not Found: Rota/recurso não existe.

405 Method Not Allowed: Verbo errado para a rota.

408 Request Timeout: Cliente demorou demais para enviar.

409 Conflict: Conflito de dados (ex: e-mail duplicado).

410 Gone: Removido permanentemente.

413 Payload Too Large: Arquivo/corpo grande demais.

415 Unsupported Media Type: Formato não aceito (ex: XML em vez de JSON).

422 Unprocessable Entity: Sintaxe certa, mas erro de validação/regra.

429 Too Many Requests: Excesso de requisições (Rate Limit).

5xx — Erro do Servidor (Falha interna):

500 Internal Server Error: Erro genérico no código do servidor.

501 Not Implemented: Servidor não suporta o recurso/método.

502 Bad Gateway: Proxy recebeu resposta inválida de outro servidor.

503 Service Unavailable: Servidor fora do ar / sobrecarregado.

504 Gateway Timeout: Proxy não recebeu resposta a tempo.*/