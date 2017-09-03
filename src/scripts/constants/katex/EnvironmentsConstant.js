export default {
    matrix : {
        type    : "Environments",
        content : "\\begin{matrix}\n   a & b \\\\\n   c & d\n\\end{matrix}"
    },

    pmatrix : {
        type    : "Environments",
        content : "\\begin{pmatrix}\n   a & b \\\\\n   c & d\n\\end{pmatrix}"
    },

    vmatrix : {
        type    : "Environments",
        content : "\\begin{vmatrix}\n   a & b \\\\\n   c & d\n\\end{vmatrix}"
    },

    Vmatrix : {
        type    : "Environments",
        content : "\\begin{Vmatrix}\n   a & b \\\\\n   c & d\n\\end{Vmatrix}"
    },

    bmatrix : {
        type    : "Environments",
        content : "\\begin{bmatrix}\n   a & b \\\\\n   c & d\n\\end{bmatrix}"
    },

    Bmatrix : {
        type    : "Environments",
        content : "\\begin{Bmatrix}\n   a & b \\\\\n   c & d\n\\end{Bmatrix}"
    },

    array : {
        type    : "Environments",
        content : "\\begin{array}{c|c}\n   a & b \\\\\n   c & d\n\\end{array}"
    },

    aligned : {
        type    : "Environments",
        content : "\\begin{aligned}\n   a&=b+c \\\\\n   d+e&=f\n\\end{aligned}"
    },

    gathered : {
        type    : "Environments",
        content : "\\begin{gathered}\n   a=b \\\\\n   e=b+c\n\\end{gathered}"
    },

    cases : {
        type    : "Environments",
        content : "x = \\begin{cases}\n   a &\\text{if } b  \\\\\n   c &\\text{if } d\n\\end{cases}"
    }
};
