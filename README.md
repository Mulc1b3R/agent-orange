<p align="center">
  <img src="https://www.psico.uk/psicoweb/img/AI.jpg" height="300"/>
</p>
<p align="center">
  <em> AGENT ORANGE GPT...Assemble, configure, and deploy autonomous AI Agents in your browser.  </em>
</p>
<p align="center">
    node version 18.0.0
</p>

<p align="center">
If you just need advice on a given topic...<a href="https://zendog-psico-mojo.vercel.app/">Talk to Zendog GPT</a>

</p>
<br>

Agent Orange GPT lies somewhere between Chat gpt and Auto gpt , configure tasks and research projects
for the Agent to work on while you are doing other things.
The AI will configure it's own research methods depending on the specific prompt you provide and return all the results
as it gathers information, once you set it a "mission" it will work on "auto pilot" while you work on other related or unrelated
things...

An example of a "Mission" may be "Research information related to the original BTC wallet belonging to Satoshi Nakamoto."

## Tech stack

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [Nextjs 13 + Typescript](https://nextjs.org/).
- ✅ **Auth**: [Next-Auth.js](https://next-auth.js.org)
- ✅ **ORM**: [Prisma](https://prisma.io).
- ✅ **Database**: [Supabase](https://supabase.com/).
- ✅ **Styling**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Typescript Schema Validation**: [Zod](https://github.com/colinhacks/zod).
- ✅ **End-to-end typesafe API**: [tRPC](https://trpc.io/).

## 👨‍🚀 Getting Started

### 🐳 Docker Setup

The easiest way to run Agent Orange GPT locally is by using docker.
A convenient setup script is provided to help you get started.

```bash
./setup.sh --docker
```

### 👷 Local Development Setup

If you wish to develop Agent Orange GPT locally, the easiest way is to
use the provided setup script.

```bash
./setup.sh --local
```

### 🛠️ Manual Setup

> 🚧 You will need [Nodejs +18 (LTS recommended)](https://nodejs.org/en/) installed.

1. Fork this project:

- [Click here](https://github.com/psico-mojo/aibot/fork).

2. Clone the repository:

https://github.com/psico-mojo/aibot.git

3. Install dependencies:

npm install

4. Create a **.env** file with the following content:

> 🚧 The environment variables must match the following [schema](https://github.com/psico-mojo/aibot/blob/main/src/env/schema.mjs).

```bash
# Deployment Environment:
NODE_ENV=development

# Next Auth config:
# Generate a secret with `openssl rand -base64 32`
NEXTAUTH_SECRET=changeme
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./db.sqlite

# Your open api key
OPENAI_API_KEY=changeme
```

5. Modify prisma schema to use sqlite:

```bash
./prisma/useSqlite.sh
```

**Note:** This only needs to be done if you wish to use sqlite.

6. Ready , now run:

```bash
# Create database migrations
npx prisma db push

# Run the project:
npm run dev
```

# coming soon

Text to speech for learning difficulties and people with impaired sight.

python itegration...

Agent0range Desktop...

Open AI...

# Big Shout

Thanks to Reworkd and AutoGPT and all the contributors ......Agent Orange is a hybrid project based on AgentGPT.This will eventually be
quite a radical departure from the original main , hence it's hybrid status...

Added 'say' elecron' and 'openai' @latest....12/05/23...
