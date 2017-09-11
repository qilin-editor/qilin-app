This is an excerpt from [Funkcja ζ Riemanna by Anna Gwiżdż](http://gamma.im.uj.edu.pl/~blocki/pmd/pm-gwizdz.pdf) which uses [AsciiMath](http://asciimath.org/) and [KaTeX](https://khan.github.io/KaTeX/).

---

# Definicja i podstawowe własności funkcji ζ

## 1.1 Funkcja ζ Riemanna

Funkcja ζ Riemanna określona jest wzorem:

```math
\zeta(s) = 1 + 1/2^s + ... + 1/n^s = \sum_{n=1}^{\infty} 1/n^s, \mathfrak{R(s)} > 1
```

Dla `math s = \sigma + it` mamy `math |n - s| = n - \sigma`. A stąd wynika, że szereg ten jest zbieżny jednostajnie w każdym podzbiorze zwartym tej półpłaszczyzny i funkcja ζ jest tam holomorficzna. Co ciekawe, ten wzór jako pierwszy sformułował Euler. Wykazał on również, iż funkcja ta ma głębokie i istotne związki z liczbami pierwszymi, a dokładniej udowodnił, że:

```math
\zeta(s) = 1/(1-1/2^s) * 1/(1-1/3^s) * 1/(1-1/5^s) * 1/(1-1/7^s) * ... = prod_{p\in\mathcalP} 1/(1-1/p^s)
```

...gdzie `math \mathcalP` oznacza zbiór liczb pierwszych.

**Twierdzenie 1.1 (Iloczyn Eulera, 1737 r.).** *Prawdziwa jest następująca tożsamość*:

```math
1/{\zeta(s)} = \prod_{p\in\mathcalP} (1-1/p^s), \mathfrak{R(s)} > 1
```

...gdzie w iloczynie występują wszystkie liczby pierwsze. Fakt ten ma ogromne zastosowanie w teorii liczb, m.in. w dowodzie twierdzenia o rozkładzie liczb pierwszych.

**Dowód.** Zauważmy, że:

```katex
\begin{aligned}
    \zeta(s)(1-2^{-s})&= \Big(1 + \tfrac{1}{2^s} + \tfrac{1}{3^s} + \tfrac{1}{4^s} + \mathellipsis \Big)\Big(1 - \tfrac{1}{2^s} \Big) \\
	&= \Big(1 + \tfrac{1}{2^s} + \tfrac{1}{3^s} + \tfrac{1}{4^s} + \mathellipsis \Big) - \Big(\tfrac{1}{2^s} + \tfrac{1}{4^s} + \tfrac{1}{6^s} + \mathellipsis \Big) \\
	\zeta(s)(1-2^{-s})(1-3^{-s})&= \Big(1 + \tfrac{1}{3^s} + \tfrac{1}{5^s} + \tfrac{1}{7^s} + \mathellipsis \Big) - \Big(\tfrac{1}{3^s} + \tfrac{1}{9^s} + \tfrac{1}{15^s} + \mathellipsis \Big)
\end{aligned}
```

Widać więc, że:

```katex
\begin{aligned}
    \zeta(s)(1-2^{-s})(1-3^{-s})\mathellipsis(1-p_n^{-s})\mathellipsis&= \zeta(s)\prod^{\infty}_{n=1}(1-p_n^{-s}) \\
	&= 1
\end{aligned}
```

A stąd już natychmiast otrzymujemy tezę. `katex \square`

## 1.2 Globalnie zbieżny szereg dla funkcji ζ

Powyżej zdefiniowaliśmy funkcję ζ dla liczb zespolonych s takich, że `math \mathfrak{R(n)} > 1`. Spróbujmy teraz znaleźć jej analityczne przedłużenie na większy obszar. Dla `math \mathfrak{R(n)} > 1`, mamy:

```math
zeta(s) = sum_{n=1}^{\infty} 1/n^s = sum_{n=1}^{\infty} n(1/n^s - 1/(n+1)^s) = sum_{n=1}^{\infty} n \int_n^{n+1} x^{-s-1} dx
```

Niech `math x = [x] + {x}`, gdzie `math [x]` jest cechą, a `math {x}` mantysą liczby `math x`. Ponieważ `math [x]` jest na każdym z przedziałów `math [n, n + 1)` stałe i równe `math n`, możemy więc napisać:

```math
zeta(s) = s sum_{n=1}^{\infty} \int_n^{n+1} [x]x^{-s-1} dx = s \int_1^\infty [x]x^{-s-1} dx
```

---

… more at [Funkcja ζ Riemanna by Anna Gwiżdż](http://gamma.im.uj.edu.pl/~blocki/pmd/pm-gwizdz.pdf).
