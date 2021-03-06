<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitffc332eb64e05c3ab8c9bfd6b59b3d48
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitffc332eb64e05c3ab8c9bfd6b59b3d48::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitffc332eb64e05c3ab8c9bfd6b59b3d48::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitffc332eb64e05c3ab8c9bfd6b59b3d48::$classMap;

        }, null, ClassLoader::class);
    }
}
