package main

import (
	"fmt"
	"strings"

	"github.com/gocolly/colly/v2"
)

func main() {
	c := colly.NewCollector()
	links := []string{}
	c.OnHTML(".r-ent .title a", func(e *colly.HTMLElement) {

		linksStr := e.Attr("href")
		linksStr = strings.Replace(linksStr, " ", "", -1) // 把空白以""取代掉

		links = append(links, linksStr)

		for _, link := range links {
			c2 := colly.NewCollector() // 這邊要在迴圈一開始再宣告一個 Collector，才不會與原本的混合到
			c2.OnHTML(".bbs-content", func(e2 *colly.HTMLElement) {

				fmt.Println(e2)
			})

			c2.Visit("https://www.ptt.cc" + link) // 找到<a>連結網址後，點進去訪問
		}
	})

	c.Visit("https://www.ptt.cc/bbs/marvel/index.html")
}
