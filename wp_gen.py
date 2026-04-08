import os, re

theme_name = "hlktape-custom-theme"
wp_dir = os.path.join("wp-theme", theme_name)
os.makedirs(wp_dir, exist_ok=True)

# 1. 创建 style.css (WP元数据)
with open(os.path.join(wp_dir, "style.css"), "w") as f:
    f.write("/*\nTheme Name: HLK Tape B2B Theme\nAuthor: Accio Bot\nDescription: 1:1 Scraped B2B Factory Theme\nVersion: 1.0\n*/")

# 2. 读取当前 index.html 提取 Header 和 Footer
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 拆分 Header (到 <main> 或第一个 section 之前)
parts = re.split(r'(<section|<main)', html, 1)
header_html = parts[0]

# 拆分 Footer (从最后一个 <footer> 之后)
f_parts = re.split(r'(<footer)', html, 1)
if len(f_parts) > 1:
    footer_html = "<footer" + f_parts[2]
else:
    footer_html = "</body></html>"

# 3. 适配路径 (改为 WP 动态路径)
header_html = header_html.replace('href="/assets/', 'href="<?php echo get_template_directory_uri(); ?>/assets/')
header_html = header_html.replace('src="/assets/', 'src="<?php echo get_template_directory_uri(); ?>/assets/')
footer_html = footer_html.replace('src="/assets/', 'src="<?php echo get_template_directory_uri(); ?>/assets/')

# 4. 写入 header.php
with open(os.path.join(wp_dir, "header.php"), "w") as f:
    f.write("<?php wp_head(); ?>\n" + header_html)

# 5. 写入 footer.php
with open(os.path.join(wp_dir, "footer.php"), "w") as f:
    f.write(footer_html + "\n<?php wp_footer(); ?>")

# 6. 写入 index.php (主循环)
index_php = """<?php get_header(); ?>
<main id="primary" class="site-main">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="entry-content"><?php the_content(); ?></div>
        </article>
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>"""
with open(os.path.join(wp_dir, "index.php"), "w") as f:
    f.write(index_php)

# 7. 写入 functions.php
with open(os.path.join(wp_dir, "functions.php"), "w") as f:
    f.write("<?php\nfunction hlk_theme_setup() {\n  add_theme_support( 'title-tag' );\n  add_theme_support( 'post-thumbnails' );\n}\nadd_action( 'after_setup_theme', 'hlk_theme_setup' );")

print("WordPress Theme structure generated in /wp-theme")
