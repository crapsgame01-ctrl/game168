module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
(()=>{
    const e = new Error("Cannot find module '@/lib/supabase'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
async function GET() {
    const { data, error } = await supabase.from("campaigns").select("*");
    if (error) return Response.json({
        error: error.message
    }, {
        status: 500
    });
    return Response.json(data);
}
async function POST(req) {
    const body = await req.json();
    const { data, error } = await supabase.from("campaigns").insert([
        {
            title: body.title,
            description: body.description,
            image: body.image || null
        }
    ]).select();
    if (error) return Response.json({
        error: error.message
    }, {
        status: 500
    });
    return Response.json(data);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa80d6f9._.js.map