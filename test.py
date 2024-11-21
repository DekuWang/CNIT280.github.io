import redis
import json
from hashlib import sha256

SALT = "CNIT280"

test_str = "114514"
print(sha256((test_str + SALT).encode()).hexdigest())

def connect_redis():
    r = redis.Redis(host = "redis", port = 6379, db = 0, decode_responses = True)
    return r

def test():
    admin = {
        "username" : "admin",
        "password" : "admin",
        "role" : "admin",
        "actived" : True
    }
    
    db = connect_redis()
    db.hset(name = "user", key = admin["username"], value = json.dumps(admin))

    print(db.hgetall(name = "user"))
    print(db.hget(name = "user", key = admin["username"]))
    print(db.hget(name = "user", key = "test"))

def login(input_username: str, password: str):
    db = connect_redis()
    db_data = json.loads(db.hget(name = "user", key = input_username))

    if password == db.hget(name = "user", key = db_data.get(password)):
        ret = RESPONSE_FORMAT
        ret["message"] = "Login success"
    else:
        return False


def register(input_username: str, password: str):
    db = connect_redis()
    test = dict()
    
    if db.hget(name = "user", key = input_username):
        return USERNAME_DUPLICATED_ERROR
    else:
        new_user = USER_FORMAT
        new_user["username"] = input_username
        new_user["password"] = password
        new_user["role"] = "customer"
        db.hset(name = "user", key = input_username, value = json.dumps(new_user))
        return True
        

RESPONSE_FORMAT = {
    "status" : "Success",
    "code" : 5000,
    "message" : "Default error type"
}

USER_FORMAT = {
    "username" : "",
    "password" : "",
    "role" : "",
    "actived" : False
}

USERNAME_DUPLICATED_ERROR = {
    "code" : 1002,
    "message" : "Username already used, please use other username"
}


def hashing(func):
    def go_hash(input_str: str):
        """
        For hashing the given string
        """
        hash_value = sha256((input_str+SALT).encode()).hexdigest()
        return hash_value
    def inner(a: str, b: str):
        print("111111")
        a,b = go_hash(a), go_hash(b)
        return func(a,b)
    return inner

@hashing
def test_hash(test1, test2):
    print(test1)
    print(test2)

test_hash("114514", "1919810")

print(type(sha256("114514".encode()).hexdigest()))


result = [2,3,3,2,4,
3,
3,
4,
1,
2,
3,
3,
2,
2,
3]

print(sum([result[0], result[4], result[6]]))
