# Kevin Shum

## Content Types

| Type        | Description                                                                                 | Command                              |
| ----------- | ------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Post**    | Used for blog posts. Posts are listed on the `/post` page.                                  | `hugo new post/<post-name>.md`       |
| **Page**    | Used for site pages.                                                                        | `hugo new <page-name>.md`            |
| **Project** | Used for project pages. Extend project list by customizing `/layouts/section/project.html`. | `hugo new project/<project-name>.md` |

## Blog post series

An extra _taxonomy_, `series`, is added to allow for the grouping of blog posts. A _Read More_ section shows at the bottom of each post within the series when two or more posts are grouped.

```toml
[taxonomies]
  category = "categories"
  series = "series"
  tag = "tags"
```

### _Series read more_

![](https://github.com/siegerts/hugo-theme-basic/blob/master/images/series.png)

## `.Params.Menu`

Menu links are specified, in order, in the theme configuration.

For example:

```toml
[[params.menu]]
  name = "blog"
  url = "blog/"

[[params.menu]]
  name = "post series"
  url = "series/"

[[params.menu]]
  name = "about"
  url = "about/"
```


## Acknowledgments

- [tachyons](http://tachyons.io/)
- [highlightjs](https://highlightjs.org/)

## License

The code is available under the [MIT license](https://github.com/siegerts/hugo-theme-basic/blob/master/LICENSE).
