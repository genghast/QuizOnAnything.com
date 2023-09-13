import openai
import json
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("OPEN_AI_API_KEY")
openai.api_key = api_key

print(api_key)


def generate_questions(questions: list) -> dict:
    return questions


def gpt_response(topic):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0613",
        messages=[
            {
                "role": "system",
                "content": f"Generate a list of 10 multiple choice questions about '{topic}' in the format: question, options, answer, category [ID 89b1538b94282261b2021c457922866c]"
            }
        ],
        functions=[
            {
                "name": "generate_questions",
                "description": 'Gets an array of question objects on the given topic',
                "parameters": {
                    "type": "object",
                    "properties": {
                        "questions": {
                            "type": "array",
                            "description": "An array of 10 question objects with keys, question, options, answer, category",
                            "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "number",
                                            "description": 'Question number of the question'
                                        },
                                        "question": {
                                            "type": "string", "description": "A question on given topic"
                                        },
                                        "options": {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            },
                                            "description": "An array of 4 options for the question"
                                        },
                                        "answer": {
                                            "type": "string",
                                            "description": "Correct answer of the question"
                                        },
                                        "category": {
                                            "type": "string"
                                        }
                                    },
                                "required": ["question", "options", "answer", "category"]
                            }
                        }
                    },
                    "required": ["questions"]
                }}
        ],
        function_call='auto'
    )

    return response


# response = {
#     "id": "chatcmpl-7SeU5heBFRuiK7FnCAIka3JsEtLCJ",
#     "object": "chat.completion",
#     "created": 1687063161,
#     "model": "gpt-3.5-turbo-0613",
#     "choices": [
#         {
#           "index": 0,
#           "message": {
#               "role": "assistant",
#               "content": None,
#               "function_call": {
#                   "name": "generate_questions",
#                   "arguments": "{\n  \"questions\": [\n    {\n      \"question\": \"Who is considered the King of Rock and Roll?\",\n      \"options\": [\"Elvis Presley\", \"Michael Jackson\", \"Bob Dylan\", \"Frank Sinatra\"],\n      \"answer\": \"Elvis Presley\",\n      \"category\": \"Music History\"\n    },\n    {\n      \"question\": \"Which artist released the album 'Thriller'?\",\n      \"options\": [\"Michael Jackson\", \"Madonna\", \"Whitney Houston\", \"Prince\"],\n      \"answer\": \"Michael Jackson\",\n      \"category\": \"Music History\"\n    },\n    {\n      \"question\": \"Which instrument is known as the 'King of Instruments'?\",\n      \"options\": [\"Piano\", \"Violin\", \"Guitar\", \"Drums\"],\n      \"answer\": \"Piano\",\n      \"category\": \"Music Instruments\"\n    },\n    {\n      \"question\": \"Who is the lead vocalist of the band Coldplay?\",\n      \"options\": [\"Chris Martin\", \"Niall Horan\", \"Brandon Flowers\", \"Adam Levine\"],\n      \"answer\": \"Chris Martin\",\n      \"category\": \"Music Artists\"\n    },\n    {\n      \"question\": \"Which rapper released the album 'Good Kid, M.A.A.D City'?\",\n      \"options\": [\"Kendrick Lamar\", \"Drake\", \"Eminem\", \"Jay-Z\"],\n      \"answer\": \"Kendrick Lamar\",\n      \"category\": \"Music History\"\n    },\n    {\n      \"question\": \"Which artist released the album '21'?\",\n      \"options\": [\"Adele\", \"Taylor Swift\", \"Beyonc\u00e9\", \"Rihanna\"],\n      \"answer\": \"Adele\",\n      \"category\": \"Music History\"\n    },\n    {\n      \"question\": \"Which band is known for the song 'Bohemian Rhapsody'?\",\n      \"options\": [\"Queen\", \"The Beatles\", \"Led Zeppelin\", \"The Rolling Stones\"],\n      \"answer\": \"Queen\",\n      \"category\": \"Music Artists\"\n    },\n    {\n      \"question\": \"Which country is known for the music genre Reggae?\",\n      \"options\": [\"Jamaica\", \"Brazil\", \"United States\", \"England\"],\n      \"answer\": \"Jamaica\",\n      \"category\": \"Music Genres\"\n    },\n    {\n      \"question\": \"Who composed the symphony 'Symphony No. 5'?\",\n      \"options\": [\"Ludwig van Beethoven\", \"Wolfgang Amadeus Mozart\", \"Johann Sebastian Bach\", \"Franz Joseph Haydn\"],\n      \"answer\": \"Ludwig van Beethoven\",\n      \"category\": \"Music Composers\"\n    },\n    {\n      \"question\": \"Which artist released the song 'Shape of You'?\",\n      \"options\": [\"Ed Sheeran\", \"Justin Bieber\", \"Bruno Mars\", \"Sam Smith\"],\n      \"answer\": \"Ed Sheeran\",\n      \"category\": \"Music Artists\"\n    }\n  ]\n}"
#               }
#           },
#             "finish_reason": "function_call"
#         }
#     ],
#     "usage": {
#         "prompt_tokens": 109,
#         "completion_tokens": 628,
#         "total_tokens": 737
#     }
# }
# questions = response['choices'][0]['message']['function_call']['arguments'].strip(
#     '\n')

# q = json.loads(questions)
# ['choices'][0]['message']['function_call']['arguments']

# if __name__ == "__main__":

#     pprint(q)
