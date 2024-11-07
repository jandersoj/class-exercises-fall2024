import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")
    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
    #print(response.content)
    soup = BeautifulSoup(response.content, 'html.parser')
# find all the anchor tags with "href"
# attribute starting with "https://"
    for link in soup.find_all('a', href=True):
# display the actual urls
        print(link.get('href'))

if __name__ == "__main__":
    main()
