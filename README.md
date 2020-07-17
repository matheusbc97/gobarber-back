# Recuperação de senha

**RF** - Requisitos funcionais

- O Usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O Usuário deve poder resetar sua senha

**RNF** - Requisitos Não funcionais

- Utilizar MailTrap para testar envios em ambiente de desenvolvimento
- Utilizar Amazon SES para envio em produção
- O envio de e-mails deve acontecer em segundo plano

**RN** - Regras de Negócio

- O link enviado por email para resetar senha, deve expirar 2h;
- O usuário precisa confirmar a nova senha ao resetar a nova senha;

# Atualização de perfil

**RF**

- O Usuário deve poder atualizar o seu nome, email e senha

**RN**

- O Usuário não pode alterar o seu email para um email já utilizado
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O Prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador do dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no mongoDB
- As notificações do prestador devem ser enviadas em tempo real com socket.io

**RN**

- A notificação deve ter um status de lida ou não-lida que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O Usuário deve poder listar todos os prestadores de serviço cadastrados;
- O Usuário deve poder listar os dias de um Mês com pelo menos um horário disponível de um prestador
- O Usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O Usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar dispníveis entre 8h as 18h (Primeiro as 8h, último as 17h)
- O usuário não pode agendar um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar em um horário consigo mesmo
