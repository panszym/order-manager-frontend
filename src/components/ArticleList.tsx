import type { Article } from "../model/ArticleModel";

interface Props {
    articles: Article[]
}

export const ArticleList = ({articles}: Props) => {
    
  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>Title</th>
            <th>orderCode</th>
            <th>Description</th>
            <th>Producer</th>
            <th>Nominal Current</th>
            <th>Nominal Voltage</th>
            <th>Width</th>
            <th>Height</th>
            <th>Depth</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.orderCode}</td>
              <td>{article.description}</td>
              <td>{article.producer}</td>
              <td>{article.nominalCurrent}</td>
              <td>{article.nominalVoltage}</td>
              <td>{article.width}</td>
              <td>{article.height}</td>
              <td>{article.depth}</td>
              <td>{article.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
