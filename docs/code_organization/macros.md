---
id: macros
title: Config Macros
sidebar_label: Config Macros
---

Macros allow you to standardize naming schemes, formats or even allow you to
replace condensed form of code. Macro definitions will have a few rules for them.

1. Starts with `MACRO` to make it **very** obvious its a macro.
2. In all caps, ex: ```MACRO_MY_NAME```, which again makes it **very** obvious
   and clear that this is a macro and brings attention to it.
3. Snake case which means `_` between each word.


```cpp
// Fundamentals
	#define MACRO_ADDON_PREFIX SWLS
	#define MACRO_AUTHORS Namenai, Ur Mom, SWOP, The 6th Element
	
// General functions
	#define MACRO_QUOTE(item) #item
	#define MACRO_SINGLE_QUOTE(item) '##item##'
	#define MACRO_CONCAT(item1,item2)\
		item1##item2
	#define MACRO_UNDERSCORE_CONCAT2(item1,item2)\
		item1##_##item2
	#define MACRO_UNDERSCORE_CONCAT3(item1,item2,item3)\
		item1##_##item2##_##item3
	#define MACRO_UNDERSCORE_CONCAT4(item1,item2,item3,item4)\
		item1##_##item2##_##item3##_##item4
	#define MACRO_UNDERSCORE_CONCAT5(item1,item2,item3,item4,item5)\
		item1##_##item2##_##item3##_##item4##_##item5

	#define MACRO_ADD_PREFIX(item) MACRO_ADDON_PREFIX##_##item

// Weapon related functions
	#define MACRO_WEAPON_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Weapon)

	#define MACRO_WEAPON_CLASS(faction,family,weaponname)\
		MACRO_UNDERSCORE_CONCAT4(MACRO_WEAPON_PREFIX,faction,family,weaponname)

	#define MACRO_WEAPON_CLASS_NOFAM(faction,name)\
		MACRO_UNDERSCORE_CONCAT3(MACRO_WEAPON_PREFIX,faction,name)

	#define MACRO_SCOPE_MAG(zoom) 0.25/zoom

// Mag related
	#define MACRO_MAG_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Magazine)
	#define MACRO_MAGWELL_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Magwell)

	#define MACRO_MAGAZINE_CLASS(name,count)\
		MACRO_UNDERSCORE_CONCAT3(MACRO_MAG_PREFIX,name,count)

	#define MACRO_MAGWELL_CLASS(name)\
		MACRO_UNDERSCORE_CONCAT2(MACRO_MAGWELL_PREFIX,name)
	#define MACRO_MAGWELL_CLASS_ARRAY(name)\
		MACRO_UNDERSCORE_CONCAT2(MACRO_MAGWELL_PREFIX,name)[]

// Ammo related
	#define MACRO_AMMO_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Ammo)

	#define MACRO_AMMO_CLASS(name)\
		MACRO_UNDERSCORE_CONCAT2(MACRO_AMMO_PREFIX,name)

// Vehicle related
	#define MACRO_BASIC_AIR_WEAPONS\
		"Laserdesignator_pilotCamera","CMFlareLauncher"
	#define MACRO_BASIC_AIR_MAGS\ 
		"Laserbatteries","300Rnd_CMFlare_Chaff_Magazine","300Rnd_CMFlare_Chaff_Magazine"

	#define MACRO_VEHICLE_CLASS(group,name)\ 
		MACRO_UNDERSCORE_CONCAT3(MACRO_ADDON_PREFIX,group,name)

// Uniforms
	//TO-DO later

// Patches
	#define MARCO_PATCH_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Patch)
	#define MACRO_PATCH_NAME(component)\
        MACRO_UNDERSCORE_CONCAT2(MARCO_PATCH_PREFIX,component)

	#define MACRO_A3_PATCH "A3_Data_F_Tank_Loadorder"
	#define MACRO_OTHER_PATCHES CBA_Watever,SWOP,ACE,TFAR
	#define MACRO_LOAD_PATCHES MACRO_A3_PATCH,MACRO_OTHER_PATCHES

	#define MACRO_LEVEL_ROOT MACRO_PATCH_NAME(main)
	#define MACRO_LEVEL_1 MACRO_PATCH_NAME(pbo1),MACRO_PATCH_NAME(pbo2)
	#define MACRO_LEVEL_2 MACRO_PATCH_NAME(pbo3),MACRO_PATCH_NAME(pbo4)
	#define MACRO_END_PATCH MACRO_LEVEL_2
	

// Helmets
	#define MACRO_HELMET_PREFIX MACRO_UNDERSCORE_CONCAT2(MACRO_ADDON_PREFIX,Helmet)
	#define MACRO_HELMET_CLASS(group,name)\ 
		MACRO_UNDERSCORE_CONCAT3(MACRO_HELMET_PREFIX,group,name)
```

Now here is an `example.cpp` file with hwo you would type it.


And then here is the same file, preprocessed with the macros.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="BeforePreprocess"
  values={[
    { label: 'Before Preprocess', value: 'BeforePreprocess', },
    { label: 'After Preprocess', value: 'AfterPreprocess', }
  ]
}>
<TabItem value="BeforePreprocess">

```cpp
// Macro demo
class unit_testing {

	class general_macros {
		modPrefix = MACRO_ADDON_PREFIX
		class MACRO_ADDON_PREFIX {};

		authors = MACRO_AUTHORS
	}
	
	class weapons {
		//Normal weapons that have families, DC series, A180 series, E11 series
		class MACRO_WEAPON_CLASS(Republic,DC_15,a) {
			myZoom = MACRO_SCOPE_MAG(4); //this is x4 zoom
		};
		//Theres E5-S,E5-C and E5-M, but wat is E5? its just by it self, so this
		//macro handles for that.
		class MACRO_WEAPON_CLASS(CIS,E5,Rifle) {};
		//The Z6 doesnt belong to any family/group of weapons.
		class MACRO_WEAPON_CLASS_NOFAM(Republic,Z6) {};
	}

	class mags {
		class MACRO_MAGAZINE_CLASS(dc15a_low,60) {};
		class MACRO_MAGAZINE_CLASS(dc15a_high,10) {};

		class MACRO_MAGWELL_CLASS(dc15) {
			MACRO_MAGWELL_CLASS_ARRAY(dc15) = {
				MACRO_MAGAZINE_CLASS(dc15a_low,60),
				MACRO_MAGAZINE_CLASS(dc15a_high,10)
			};
		};
	}

	class ammo {
		myAmmo = MACRO_AMMO_CLASS(dc15_high);
	}

	class vehicles {
		class MACRO_VEHICLE_CLASS(Laat,Mk3) {};
		class MACRO_VEHICLE_CLASS(Laat,Mk4):MACRO_VEHICLE_CLASS(laat,mk3){};
	}	

	class cfgPatches {
		//The idea here is you kind of flatten our the load order to make it a
		//really simple Topological sort.

		patches_load_order[] = {
			MACRO_LOAD_PATCHES,
			MACRO_LEVEL_ROOT,
			MACRO_LEVEL_1,
			MACRO_LEVEL_2,
			MACRO_END_PATCH
		};
	}

	class helmet {
		class MACRO_HELMET_CLASS(arc,jesse) {};
		class MACRO_HELMET_CLASS(inf,bobby) {};
		class MACRO_HELMET_CLASS(pilot,namenai) {};
	}
}
```

</TabItem>
<TabItem value="AfterPreprocess">

```cpp
class unit_testing
{
	class general_macros
	{
		modPrefix="SWLS";
		class SWLS
		{
		};
		authors="Namenai, Ur Mom, SWOP, The 6th Element";
	};
	class weapons
	{
		class SWLS_Weapon_Republic_DC_15_a
		{
			myZoom="0.25/4";
		};
		class SWLS_Weapon_CIS_E5_Rifle
		{
		};
		class SWLS_Weapon_Republic_Z6
		{
		};
	};
	class mags
	{
		class SWLS_Magazine_dc15a_low_60
		{
		};
		class SWLS_Magazine_dc15a_high_10
		{
		};
		class SWLS_Magwell_dc15
		{
			SWLS_Magwell_dc15[]=
			{
				"SWLS_Magazine_dc15a_low_60",
				"SWLS_Magazine_dc15a_high_10"
			};
		};
	};
	class ammo
	{
		myAmmo="SWLS_Ammo_dc15_high";
	};
	class vehicles
	{
		class SWLS_Laat_Mk3
		{
		};
		class SWLS_Laat_Mk4: SWLS_Laat_Mk3
		{
		};
	};
	class cfgPatches
	{
		patches_load_order[]=
		{
			"A3_Data_F_Tank_Loadorder",
			"CBA_Watever",
			"SWOP",
			"ACE",
			"TFAR",
			"SWLS_Patch_main",
			"SWLS_Patch_pbo1",
			"SWLS_Patch_pbo2",
			"SWLS_Patch_pbo3",
			"SWLS_Patch_pbo4",
			"SWLS_Patch_pbo3",
			"SWLS_Patch_pbo4"
		};
	};
	class helmet
	{
		class SWLS_Helmet_arc_jesse
		{
		};
		class SWLS_Helmet_inf_bobby
		{
		};
		class SWLS_Helmet_pilot_namenai
		{
		};
	};
};

```

</TabItem>
</Tabs>