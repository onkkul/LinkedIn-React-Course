import os

repos = [
    "Exercise\ Files/Ch02/02_02/finished/react-is-fun",
    "Exercise\ Files/Ch02/02_02/start/react-is-fun",
    "Exercise\ Files/Ch02/02_03/finished/react-is-fun",
    "Exercise\ Files/Ch02/02_03/start/react-is-fun",
    "Exercise\ Files/Ch02/02_04/finished/react-is-fun",
    "Exercise\ Files/Ch02/02_04/start/react-is-fun",
    "Exercise\ Files/Ch03/03_01/finished/react-is-fun",
    "Exercise\ Files/Ch03/03_01/start/react-is-fun",
    "Exercise\ Files/Ch03/03_02/finished/react-is-fun",
    "Exercise\ Files/Ch03/03_02/start/react-is-fun",
    "Exercise\ Files/Ch03/03_03/finished/react-is-fun",
    "Exercise\ Files/Ch03/03_03/start/react-is-fun",
    "Exercise\ Files/Ch03/03_04/finished/react-is-fun",
    "Exercise\ Files/Ch03/03_04/start/react-is-fun",
    "Exercise\ Files/Ch03/03_05/finished/react-is-fun",
    "Exercise\ Files/Ch03/03_05/start/react-is-fun",
    "Exercise\ Files/Ch04/04_01/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_01/start/react-is-fun",
    "Exercise\ Files/Ch04/04_02/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_02/start/react-is-fun",
    "Exercise\ Files/Ch04/04_03/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_03/start/react-is-fun",
    "Exercise\ Files/Ch04/04_04/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_04/start/react-is-fun",
    "Exercise\ Files/Ch04/04_05/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_05/start/react-is-fun",
    "Exercise\ Files/Ch04/04_06/finished/react-is-fun",
    "Exercise\ Files/Ch04/04_06/start/react-is-fun",
    "Exercise\ Files/Ch05/05_01/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_01/start/react-is-fun",
    "Exercise\ Files/Ch05/05_02/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_02/start/react-is-fun",
    "Exercise\ Files/Ch05/05_03/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_03/start/react-is-fun",
    "Exercise\ Files/Ch05/05_04/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_04/start/react-is-fun",
    "Exercise\ Files/Ch05/05_05/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_05/start/react-is-fun",
    "Exercise\ Files/Ch05/05_06/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_06/start/react-is-fun",
    "Exercise\ Files/Ch05/05_07/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_07/start/react-is-fun",
    "Exercise\ Files/Ch05/05_08/finished/react-is-fun",
    "Exercise\ Files/Ch05/05_08/start/react-is-fun"
    ]
    
for each in repos:
    os.system(f"rm -rf ./{each}/.git")
