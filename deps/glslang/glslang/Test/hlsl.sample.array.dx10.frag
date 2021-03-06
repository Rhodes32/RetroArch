SamplerState       g_sSamp : register(s0);

Texture1DArray          g_tTex1df4a : register(t1);

uniform Texture1DArray <float4> g_tTex1df4 : register(t0);
Texture1DArray <int4>   g_tTex1di4;
Texture1DArray <uint4>  g_tTex1du4;

Texture2DArray <float4> g_tTex2df4;
Texture2DArray <int4>   g_tTex2di4;
Texture2DArray <uint4>  g_tTex2du4;

TextureCubeArray <float4> g_tTexcdf4;
TextureCubeArray <int4>   g_tTexcdi4;
TextureCubeArray <uint4>  g_tTexcdu4;

struct PS_OUTPUT
{
    float4 Color : SV_Target0;
    float  Depth : SV_Depth;
};

PS_OUTPUT main()
{
   PS_OUTPUT psout;

   float4 txval10 = g_tTex1df4 . Sample(g_sSamp, float2(0.1, 0.2));
   int4   txval11 = g_tTex1di4 . Sample(g_sSamp, float2(0.2, 0.3));
   uint4  txval12 = g_tTex1du4 . Sample(g_sSamp, float2(0.3, 0.4));

   float4 txval20 = g_tTex2df4 . Sample(g_sSamp, float3(0.1, 0.2, 0.3));
   int4   txval21 = g_tTex2di4 . Sample(g_sSamp, float3(0.3, 0.4, 0.5));
   uint4  txval22 = g_tTex2du4 . Sample(g_sSamp, float3(0.5, 0.6, 0.7));

   float4 txval40 = g_tTexcdf4 . Sample(g_sSamp, float4(0.1, 0.2, 0.3, 0.4));
   int4   txval41 = g_tTexcdi4 . Sample(g_sSamp, float4(0.4, 0.5, 0.6, 0.7));
   uint4  txval42 = g_tTexcdu4 . Sample(g_sSamp, float4(0.7, 0.8, 0.9, 1.0));

   psout.Color = 1.0;
   psout.Depth = 1.0;

   return psout;
}
