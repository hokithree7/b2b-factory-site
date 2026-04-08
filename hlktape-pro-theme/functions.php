<?php
function hlk_pro_scripts() {
    $uri = get_template_directory_uri();
    // 自动加载本地化的 CSS 和 JS
    wp_enqueue_style( 'hlk-main-style', get_stylesheet_uri() );
    
    // 注册所有 assets 目录下的 css
    $css_dir = get_template_directory() . '/assets/css';
    if(is_dir($css_dir)) {
        foreach(glob($css_dir . '/*.css') as $file) {
            $name = basename($file, '.css');
            wp_enqueue_style('hlk-'.$name, $uri . '/assets/css/' . basename($file));
        }
    }
    
    // 注册所有 assets 目录下的 js
    $js_dir = get_template_directory() . '/assets/js';
    if(is_dir($js_dir)) {
        foreach(glob($js_dir . '/*.js') as $file) {
            $name = basename($file, '.js');
            wp_enqueue_script('hlk-'.$name, $uri . '/assets/js/' . basename($file), array(), null, true);
        }
    }
    
    // 引入 Formspree AJAX
    wp_enqueue_script('formspree-ajax', 'https://unpkg.com/@formspree/ajax@1', array(), null, true);
}
add_action( 'wp_enqueue_scripts', 'hlk_pro_scripts' );

function hlk_pro_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array( 'primary' => 'Main Menu' ) );
}
add_action( 'after_setup_theme', 'hlk_pro_setup' );
