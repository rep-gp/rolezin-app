const trim = (terms: TemplateStringsArray) => {
    const str = terms.join(' ')
    return str.replace(/[\s\n]+/g, ' ')
}

export const shortcuts = {
    'bordered': trim`
        b-1 b-coolgray-200 
        dark:b-dark-200 
        rounded-2 p-3
    `,
    'r-input': trim`
        rounded b-1 b-warmgray-300 bg-transparent
        py-1 px-2 w-full text-3.5
        text-warmgray-500
        dark:text-warmgray-300 dark:b-warmgray-500
        focus:b-warmgray-400 focus:shadow-lg focus:shadow-warmgray-200
        focus-within:b-warmgray-400 focus-within:shadow-lg focus-within:shadow-warmgray-200
        dark:focus:shadow-warmgray-700 dark:focus:b-warmgray-300
        dark:focus-within:shadow-warmgray-700 dark:focus-within:b-warmgray-300
        outline-none
        transition
    `,
    'r-label': trim`
        text-sm text-warmgray-600 dark:text-warmgray-400 mb-2 font-bold
    `,
    'r-button': trim`
        rounded p-1 bg-warmgray-100 dark:bg-warmgray-700
        text-warmgray-700 dark:text-warmgray-300
        hover:op70 active:op90 cursor-pointer transition-opacity
    `,
}
