from typing import Union
from os import environ

from fastapi import FastAPI

from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

OPENAI_API_KEY = environ.get("OPENAI_API_KEY")

START_GOAL_PROMPT = PromptTemplate(
    input_variables=["goal"],
    template="You are an autonomous task creation AI called AgentGPT. "
             "You have the following objective {goal}. "
             "Create a list of zero to three tasks to be completed by your "
             "AI system such that your goal is more closely reached or "
             "completely reached. Return the response as an array of "
             "strings that can be used in JSON.parse(),",
)

EXECUTE_TASK_PROMPT = PromptTemplate(
    input_variables=["goal", "task"],
    template="You are an autonomous task execution AI called AgentGPT. "
             "You have the following objective {goal}. "
             "You have the following tasks {task}. "
             "Execute the task and return the response as a string.",

)

# CREATE_TASK_PROMPT = PromptTemplate(
#     inputVariables=["goal", "tasks", "lastTask", "result"],
#     template="You are an AI task creation agent. "
#              "You have the following objective {goal}. "
#              "You have the following incomplete tasks {tasks} "
#              "and have just executed the following task {lastTask} "
#              "and received the following result {result}. "
#              "Based on this, create a new task to be completed "
#              "by your AI system ONLY IF NEEDED such that your goal "
#              "is more closely reached or completely reached. "
#              "Return the response as an array of strings that can "
#              "be used in JSON.parse() and NOTHING ELSE",
# )

open_ai = ChatOpenAI(
    temperature=0.9,
    model_name="gpt-3.5-turbo",
    max_tokens=300,
    openai_api_key=OPENAI_API_KEY,
)

app = FastAPI()


@app.post("/chain")
def chain(goal: str):
    return LLMChain(
        llm=open_ai,
        prompt=START_GOAL_PROMPT,
    ).run(goal=goal)


@app.post("/execute")
def execute(goal: str, task: str):
    return LLMChain(
        llm=open_ai,
        prompt=EXECUTE_TASK_PROMPT,
    ).run(goal=goal, task=task)


# @app.post("/create")
# def create(goal: str, tasks: Union[str, list], last_task: str, result: str):
#     return LLMChain(
#         llm=open_ai,
#         prompt=CREATE_TASK_PROMPT,
#     ).run(goal=goal, tasks=tasks, lastTask=last_task, result=result)


if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app)
