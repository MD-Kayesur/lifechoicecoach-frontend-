"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery, useUpdateProfileMutation, useDeleteProfileMutation } from "@/redux/features/profile/profileApi";
import { RootState } from "@/store/store";
import { setUser, logout } from "@/store/Slices/AuthSlice/authSlice";
import { Loader2, Camera, User, Phone, Save, Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const { data: profileData, isLoading: isProfileLoading } = useGetProfileQuery();
    const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
    const [deleteProfile, { isLoading: isDeleting }] = useDeleteProfileMutation();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        if (profileData?.profile) {
            setFormData({
                first_name: profileData.profile.first_name || "",
                last_name: profileData.profile.last_name || "",
                phone_number: profileData.profile.phone_number || "",
            });
            if (profileData.profile.dp_image) {
                setImagePreview(profileData.profile.dp_image);
            }
        } else if (user) {
            setFormData({
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                phone_number: user.phone_number || "",
            });
            if (user.dp_image) {
                setImagePreview(user.dp_image);
            }
        }
    }, [profileData, user]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("Image size must be less than 2MB");
                return;
            }
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await updateProfile({
                ...formData,
                dp_image: imageFile
            }).unwrap();

            toast.success("Profile updated successfully!");
            // Update local user state
            dispatch(setUser(result.profile));
            setImageFile(null);
        } catch (error: any) {
            toast.error(error.data?.message || "Failed to update profile");
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await deleteProfile().unwrap();
            toast.success("Account deleted successfully");
            dispatch(logout());
            router.push("/");
        } catch (error: any) {
            toast.error(error.data?.message || "Failed to delete account");
        }
    };

    if (isProfileLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-[14.5px] font-bold text-white mb-3 tracking-wide">My Personal Profile</div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
                {/* Main Profile Form */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 group hover:border-gold/20 transition-all">
                    <form onSubmit={handleUpdate} className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Avatar Upload */}
                            <div className="relative group/avatar">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center transition-all group-hover/avatar:border-gold/50">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <User size={48} className="text-white/20" />
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-gold text-white flex items-center justify-center shadow-lg hover:bg-gold2 transition-all"
                                >
                                    <Camera size={18} />
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>

                            <div className="flex-1 space-y-6 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-[1px] ml-1 flex items-center gap-1.5">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.first_name}
                                            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-[1px] ml-1 flex items-center gap-1.5">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.last_name}
                                            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all"
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-white/40 text-[10px] font-mono font-bold uppercase tracking-[1px] ml-1 flex items-center gap-1.5">
                                        <Phone size={10} /> Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.phone_number}
                                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <p className="text-white/30 text-[11px] max-w-[300px]">
                                Your profile information is used for generating certificates and academic records.
                            </p>
                            <button
                                type="submit"
                                disabled={isUpdating}
                                className="bg-gold text-white text-[13px] font-bold px-8 py-3 rounded-xl shadow-lg shadow-gold/10 border border-gold/20 hover:bg-gold2 transition-all disabled:opacity-50 flex items-center gap-2"
                            >
                                {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={16} />}
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sidebar Info/Danger Zone */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-white text-[14px] font-bold mb-4 flex items-center gap-2">
                            Account Status
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/40 text-[11px] uppercase font-mono">Role</span>
                                <span className="text-gold text-[12px] font-bold">{user?.role || "IKON Student"}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-white/40 text-[11px] uppercase font-mono">Email</span>
                                <span className="text-white/80 text-[12px]">{user?.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 group hover:border-red-500/30 transition-all">
                        <h3 className="text-red-400 text-[14px] font-bold mb-4 flex items-center gap-2">
                            <AlertTriangle size={16} /> Danger Zone
                        </h3>
                        {showDeleteConfirm ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                                <p className="text-red-400/60 text-[11px] leading-relaxed">
                                    Are you sure? This action is permanent and will delete all your academic records.
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleDeleteAccount}
                                        disabled={isDeleting}
                                        className="flex-1 bg-red-500 text-white text-[11px] font-bold py-2 rounded-lg hover:bg-red-600 transition-all disabled:opacity-50"
                                    >
                                        {isDeleting ? "Deleting..." : "Confirm Delete"}
                                    </button>
                                    <button
                                        onClick={() => setShowDeleteConfirm(false)}
                                        className="flex-1 bg-white/5 text-white/50 text-[11px] font-bold py-2 rounded-lg hover:bg-white/10 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="w-full flex items-center justify-between p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all border border-red-500/10"
                            >
                                <span className="text-[12px] font-bold">Delete Account</span>
                                <Trash2 size={16} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
